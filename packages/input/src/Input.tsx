import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type ReactInputProps = React.HTMLAttributes<HTMLInputElement>
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

    const {
      theme: { InputStyles },
    } = useThemeCtx()

    const cls = clsx(
      className,
      InputStyles.base,
      isBlock && 'w-full',
      isValid && !isDisabled && InputStyles.active,
      isDisabled && InputStyles.disabled,
      !isValid && InputStyles.invalid,
      hasLeft && `pl-10`,
      hasRight && `pr-10`,
    )

    return <input ref={ref} className={cls} {...rest} type="text" />
  },
)

Input.displayName = 'Input'
