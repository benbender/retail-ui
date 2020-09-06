import clsx from 'clsx'
import * as React from 'react'

import { InputStyles } from './styles'

type ReactInputProps = React.InputHTMLAttributes<HTMLInputElement>
type Ref = HTMLInputElement

export type InputProps = {
  isDisabled?: boolean
  isValid?: boolean
  isBlock?: boolean
  hasLeft?: boolean
  hasRight?: boolean
}

export const Input = React.forwardRef<Ref, ReactInputProps & InputProps>(
  (props, ref) => {
    const {
      children,
      className,
      isBlock,
      isDisabled,
      isValid = true,
      hasLeft,
      hasRight,
      ...rest
    } = props

    const cls = clsx(
      className,
      InputStyles.base,
      isBlock && 'w-full',
      isDisabled && InputStyles.disabled,
      !isValid && InputStyles.invalid,
      hasLeft && `pl-10`,
      hasRight && `pr-10`,
    )

    return <input ref={ref} className={cls} {...rest} type="text" />
  },
)

Input.displayName = 'Input'
