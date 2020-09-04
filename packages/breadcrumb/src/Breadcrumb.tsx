import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type ReactUListProps = React.HTMLAttributes<HTMLUListElement>
type Ref = HTMLUListElement

export type BreadcrumbProps = {}

export const Breadcrumb = React.forwardRef<
  Ref,
  ReactUListProps & BreadcrumbProps
>((props, ref) => {
  const { children, className, ...rest } = props
  const {
    theme: { BreadcrumbStyles },
  } = useThemeCtx()

  const cls = clsx(className, BreadcrumbStyles.base)

  return (
    <ul ref={ref} className={cls} {...rest}>
      {children}
    </ul>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
