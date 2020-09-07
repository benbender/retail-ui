import { Spinner } from '@retail-ui/spinner'
import { cloneElement } from '@retail-ui/utils'
import clsx from 'clsx'
import * as React from 'react'

import { ButtonStyles } from './styles'

type Ref = HTMLButtonElement
type ReactButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

type ButtonColor = keyof typeof ButtonStyles['variant']['default']
type ButtonVariant = keyof typeof ButtonStyles['variant']
type ButtonSize = keyof typeof ButtonStyles['size']
type ButtonShape = keyof typeof ButtonStyles['shape']

export type ButtonProps = {
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  color?: ButtonColor
  spinnerClassName?: string
  block?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  isLoading?: boolean
  isDisabled?: boolean
  isBlock?: boolean
}

export const Button = React.forwardRef<Ref, ReactButtonProps & ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      spinnerClassName,
      isDisabled,
      isBlock,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      iconLeft,
      iconRight,
      shape,
      onClick,
      ...rest
    } = props

    const variantCls = ButtonStyles.variant

    const colorCls = variantCls[variant]
    const sizeCls = ButtonStyles.size
    const shapeCls = ButtonStyles.shape

    const cls = clsx(
      className,
      ButtonStyles.base,
      isDisabled && ButtonStyles.disabled,
      isBlock && ButtonStyles.block,
      isLoading && ButtonStyles.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
    )
    // Spinner
    const spinnerSizeCls = ButtonStyles.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    /* iconCls */
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

    const iconLeftNode = cloneElement(iconLeft, { className: iconLeftCls })
    const iconRightNode = cloneElement(iconRight, { className: iconRightCls })

    return (
      <button
        ref={ref}
        className={cls}
        disabled={isDisabled}
        onClick={onClick}
        {...rest}
      >
        {isLoading && <Spinner className={spinnerCls} />}
        {iconLeftNode}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
        {iconRightNode}
      </button>
    )
  },
)

Button.displayName = 'Button'
