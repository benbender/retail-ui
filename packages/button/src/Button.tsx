import { IconProps } from '@retail-ui/icon'
import { Spinner } from '@retail-ui/spinner'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type ReactButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled' | 'onClick'
>

export type ButtonColor = keyof Theme['ButtonStyles']['variant']['default']
export type ButtonVariant = keyof Theme['ButtonStyles']['variant']
export type ButtonSize = keyof Theme['ButtonStyles']['size']
export type ButtonShape = keyof Theme['ButtonStyles']['shape']

export type ButtonProps = ReactButtonProps &
  React.PropsWithChildren<{
    size?: ButtonSize
    variant?: ButtonVariant
    shape?: ButtonShape
    color?: ButtonColor
    className?: string
    spinnerClassName?: string
    block?: boolean
    iconLeft?: React.ComponentType<IconProps>
    iconRight?: React.ComponentType<IconProps>
    isLoading?: boolean
  }>

type Ref = HTMLButtonElement

export const Button = React.forwardRef<Ref, ButtonProps>(
  (
    {
      children,
      className,
      spinnerClassName,
      disabled,
      block,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      iconLeft,
      iconRight,
      shape,
      onClick,
    },
    ref,
  ) => {
    const {
      theme: { ButtonStyles },
    } = useThemeCtx()

    const variantCls = ButtonStyles.variant

    const colorCls = variantCls[variant]
    const sizeCls = ButtonStyles.size
    const shapeCls = ButtonStyles.shape

    const IconLeft = iconLeft
    const IconRight = iconRight

    const cls = clsx(
      ButtonStyles.base,
      disabled && ButtonStyles.disabled,
      block && ButtonStyles.block,
      isLoading && ButtonStyles.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
      className,
    )
    // Spinner
    const spinnerSizeCls = ButtonStyles.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconCls = ButtonStyles.icon
    const iconSizeCls = iconCls['size']

    const iconLeftCls = clsx(
      children && iconCls.variant.left,
      isLoadingCls,
      iconSizeCls[size],
    )
    const iconRightCls = clsx(
      children && iconCls.variant.right,
      isLoadingCls,
      iconSizeCls[size],
    )

    return (
      <button ref={ref} className={cls} disabled={disabled} onClick={onClick}>
        {isLoading && <Spinner className={spinnerCls} />}
        {IconLeft && <IconLeft className={iconLeftCls} />}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
        {IconRight && <IconRight className={iconRightCls} />}
      </button>
    )
  },
)

Button.displayName = 'Button'
