import clsx from 'clsx'
import * as React from 'react'

import { RadioStyles } from './styles'

type ReactInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'disabled'
>
type Ref = HTMLInputElement

export type RadioProps = {
  isDisabled?: boolean
}

export const Radio = React.forwardRef<Ref, ReactInputProps & RadioProps>(
  (props, ref) => {
    const { children, className, isDisabled, ...rest } = props

    const cls = clsx(
      className,
      RadioStyles.base,
      isDisabled && RadioStyles.disabled,
    )
    const labelCls = clsx(RadioStyles.label)

    return (
      <div>
        <label className={labelCls}>
          <input
            className={cls}
            ref={ref}
            {...rest}
            type="radio"
            disabled={isDisabled}
          />
          <span
            className={`ml-2 ${isDisabled && `opacity-50 cursor-not-allowed`}`}
          >
            {children}
          </span>
        </label>
      </div>
    )
  },
)

Radio.displayName = 'Radio'
