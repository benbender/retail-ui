import { Theme, useThemeCtx } from '@retail-ui/theme'
import { cloneElement } from '@retail-ui/utils'
import clsx from 'clsx'
import * as React from 'react'

type ReactLIProps = React.HTMLAttributes<HTMLLIElement>
type Ref = HTMLLIElement

type BreadcrumbItemSize = keyof Theme['BreadcrumbStyles']['item']['size']

export const BREADCRUMB_SEPARATOR_VARIANT = {
  default: '/',
  arrow: '→',
  arrowhead: '>',
  bullet: '.',
}
export type BreadcrumbItemProps = {
  separator?: keyof typeof BREADCRUMB_SEPARATOR_VARIANT
  onClick?: () => void
  isActive?: boolean
  size?: BreadcrumbItemSize
  icon?: React.ReactNode
}

// TODO: add hover style for primary text
export const BreadcrumbItem = React.forwardRef<
  Ref,
  ReactLIProps & BreadcrumbItemProps
>((props, ref) => {
  const {
    children,
    separator = 'default',
    className,
    isActive = false,
    size = 'base',
    icon,
    ...rest
  } = props

  const {
    theme: { BreadcrumbStyles },
  } = useThemeCtx()

  const itemCls = BreadcrumbStyles.item

  const sizeCls = itemCls.size

  const cls = clsx(
    className,
    itemCls.base,
    isActive && itemCls.active,
    sizeCls[size],
  )

  let linkToRender
  if (icon) {
    const iconSizeCls = itemCls.icon.size
    const iconCls = clsx(itemCls.icon.base, iconSizeCls[size])
    const iconNode = cloneElement(icon, { className: iconCls })

    linkToRender = (
      <span className="flex items-center">
        {iconNode}
        {children}
      </span>
    )
  } else {
    linkToRender = <span>{children}</span>
  }

  const separatorCls = clsx(BreadcrumbStyles.separator.base)

  return (
    <React.Fragment>
      <li ref={ref} className={cls} {...rest}>
        {linkToRender}
      </li>
      {separator && (
        <span className={separatorCls}>
          {BREADCRUMB_SEPARATOR_VARIANT[separator]}
        </span>
      )}
    </React.Fragment>
  )
})

BreadcrumbItem.displayName = 'BreadcrumbItem'
