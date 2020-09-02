import { IconProps } from '@retail-ui/icon'
import { Spinner } from '@retail-ui/spinner'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick'
>

export type ButtonIconColor = keyof Theme['ButtonIconStyles']['variant']['default']
export type ButtonIconVariant = keyof Theme['ButtonIconStyles']['variant']
export type ButtonIconSize = keyof Theme['ButtonIconStyles']['size']
export type ButtonIconShape = keyof Theme['ButtonIconStyles']['shape']

export type ButtonIconProps = ReactButtonProps & {
  size?: ButtonIconSize
  variant?: ButtonIconVariant
  shape?: ButtonIconShape
  color?: ButtonIconColor
  className?: string
  spinnerClassName?: string
  icon: React.ComponentType<IconProps>
  isLoading?: boolean
  isDisabled?: boolean
}

type Ref = HTMLButtonElement

export const ButtonIcon = React.forwardRef<Ref, ButtonIconProps>(
  (props, ref) => {
    const {
      className,
      spinnerClassName,
      isDisabled,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      icon,
      shape,
      onClick,
      ...rest
    } = props

    const {
      theme: { ButtonIconStyles },
    } = useThemeCtx()

    const variantCls = ButtonIconStyles.variant

    const colorCls = variantCls[variant]
    const sizeCls = ButtonIconStyles.size
    const shapeCls = ButtonIconStyles.shape

    const Icon = icon

    const cls = clsx(
      ButtonIconStyles.base,
      isDisabled && ButtonIconStyles.disabled,
      isLoading && ButtonIconStyles.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
      className,
    )
    const spinnerSizeCls = ButtonIconStyles.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconSizeCls = ButtonIconStyles.icon.size

    const iconCls = clsx(iconSizeCls[size], isLoadingCls)

    return (
      <button
        ref={ref}
        className={cls}
        disabled={isDisabled}
        onClick={onClick}
        {...rest}
      >
        {isLoading && <Spinner className={spinnerCls} />}
        <Icon className={iconCls} />
      </button>
    )
  },
)

ButtonIcon.displayName = 'ButtonIcon'
