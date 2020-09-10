import { Spinner } from '@retail-ui/spinner'
import { cloneElement } from '@retail-ui/utils'
import clsx from 'clsx'
import * as React from 'react'

import { ButtonIconStyles } from './styles'

type Ref = HTMLButtonElement
type ReactButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

type ButtonIconColor = keyof typeof ButtonIconStyles['variant']['default']
type ButtonIconVariant = keyof typeof ButtonIconStyles['variant']
type ButtonIconSize = keyof typeof ButtonIconStyles['size']
type ButtonIconShape = keyof typeof ButtonIconStyles['shape']

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
