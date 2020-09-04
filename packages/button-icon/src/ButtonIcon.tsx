import { Spinner } from '@retail-ui/spinner'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import { cloneElement } from '@retail-ui/utils'
import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

type Ref = HTMLButtonElement
type ReactButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

type ButtonIconColor = keyof Theme['ButtonIconStyles']['variant']['default']
type ButtonIconVariant = keyof Theme['ButtonIconStyles']['variant']
type ButtonIconSize = keyof Theme['ButtonIconStyles']['size']
type ButtonIconShape = keyof Theme['ButtonIconStyles']['shape']

export type ButtonIconProps = {
  size?: ButtonIconSize
  variant?: ButtonIconVariant
  shape?: ButtonIconShape
  color?: ButtonIconColor
  spinnerClassName?: string
  icon: React.ReactNode
  isLoading?: boolean
  isDisabled?: boolean
}

export const ButtonIcon = React.forwardRef<
  Ref,
  ReactButtonProps & ButtonIconProps
>((props, ref) => {
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

  const cls = clsx(
    className,
    ButtonIconStyles.base,
    isDisabled && ButtonIconStyles.disabled,
    isLoading && ButtonIconStyles.loading,
    colorCls[color],
    sizeCls[size],
    shape && shapeCls[shape],
  )

  const spinnerSizeCls = ButtonIconStyles.spinner.size
  const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
  const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

  /* Icons */
  const iconSizeCls = ButtonIconStyles.icon.size
  const iconCls = clsx(iconSizeCls[size], isLoadingCls)

  const iconNode = cloneElement(icon, { className: iconCls })

  return (
    <button
      ref={ref}
      className={cls}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {isLoading && <Spinner className={spinnerCls} />}
      {iconNode}
    </button>
  )
})

ButtonIcon.displayName = 'ButtonIcon'
