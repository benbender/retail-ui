import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type Ref = HTMLInputElement
type ReactInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked'
>

export type CheckBoxProps = {
  isChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = React.forwardRef<Ref, ReactInputProps & CheckBoxProps>(
  (props, ref) => {
    const { children, className, isChecked = false, onChange, ...rest } = props
    const {
      theme: { CheckBoxStyles },
    } = useThemeCtx()

    const cls = clsx(className, CheckBoxStyles.base)

    return (
      <input
        ref={ref}
        type="checkbox"
        className={cls}
        checked={isChecked}
        onChange={onChange}
        {...rest}
      />
    )
  },
)

CheckBox.displayName = 'CheckBox'
