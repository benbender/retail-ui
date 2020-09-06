import clsx from 'clsx'
import * as React from 'react'

import { CheckBoxStyles } from './styles'

type Ref = HTMLInputElement
type ReactInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'disabled'
>

export type CheckBoxProps = {
  isDisabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: React.ReactNode
}

export const CheckBox = React.forwardRef<Ref, ReactInputProps & CheckBoxProps>(
  (props, ref) => {
    const { className, isDisabled, onChange, label, ...rest } = props

    const cls = clsx(
      className,
      CheckBoxStyles.base,
      isDisabled && CheckBoxStyles.disabled,
    )

    const labelCls = clsx(CheckBoxStyles.label, CheckBoxStyles)

    return (
      <label className={labelCls}>
        <input
          ref={ref}
          type="checkbox"
          className={cls}
          onChange={onChange}
          {...rest}
        />
        {label && (
          <span
            className={`ml-2 ${isDisabled && `opacity-50 cursor-not-allowed`}`}
          >
            {label}
          </span>
        )}
      </label>
    )
  },
)

CheckBox.displayName = 'CheckBox'
