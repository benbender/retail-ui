import { ButtonIcon, ButtonIconVariant } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type BadgeVariant = keyof Theme['BadgeStyles']['variant']
export type BadgeColor = keyof Theme['BadgeStyles']['variant']['solid']

export type BadgeProps = React.PropsWithChildren<{
  variant?: BadgeVariant
  color?: BadgeColor
  hasClose?: boolean
  className?: string
  onClose?: () => void
}>
type Ref = HTMLDivElement

// TODO: hasClose icon size
export const Badge = React.forwardRef<Ref, BadgeProps>((props, ref) => {
  const {
    children,
    className,
    variant = 'solid',
    color = 'primary',
    hasClose,
    onClose,
  } = props

  const {
    theme: { BadgeStyles },
  } = useThemeCtx()

  const variantCls = BadgeStyles.variant
  const colorCls = variantCls[variant]

  const cls = clsx(
    BadgeStyles.base,
    BadgeStyles.active,
    BadgeStyles.focus,
    colorCls[color],
    className,
  )

  const btnVariant: Record<BadgeVariant, ButtonIconVariant> = {
    solid: 'default',
    light: 'light',
  }
  const btnCls = BadgeStyles.btn

  return (
    <div ref={ref} className={cls}>
      {children}
      {hasClose && (
        <ButtonIcon
          className={btnCls}
          color={color}
          size="xs"
          shape="rounded"
          icon={XSolid}
          variant={btnVariant[variant]}
          onClick={onClose}
        />
      )}
    </div>
  )
})

Badge.displayName = 'Badge'
