import { ButtonIcon, ButtonIconProps } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import clsx from 'clsx'
import * as React from 'react'

import { BadgeStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type BadgeVariant = keyof typeof BadgeStyles['variant']
type BadgeColor = keyof typeof BadgeStyles['variant']['solid']

export type BadgeProps = {
  variant?: BadgeVariant
  color?: BadgeColor
  hasClose?: boolean
  onClose?: () => void
}

// TODO: hasClose icon size
export const Badge = React.forwardRef<Ref, ReactDivProps & BadgeProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant = 'solid',
      color = 'primary',
      hasClose,
      onClose,
      ...rest
    } = props

    const variantCls = BadgeStyles.variant
    const colorCls = variantCls[variant]

    const cls = clsx(
      className,
      BadgeStyles.base,
      BadgeStyles.active,
      BadgeStyles.focus,
      colorCls[color],
    )

    const btnVariant: Record<BadgeVariant, ButtonIconProps['variant']> = {
      solid: 'default',
      light: 'light',
    }
    const btnCls = BadgeStyles.btn

    return (
      <div ref={ref} className={cls} {...rest}>
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
  },
)

Badge.displayName = 'Badge'
