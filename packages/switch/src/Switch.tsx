import clsx from 'clsx'
import React from 'react'

import { SwitchStyles } from './styles'

type Ref = HTMLInputElement
type ReactInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled'
>

export type SwitchProps = {
  isChecked?: boolean
  isDisabled?: boolean
}

export const Switch = React.forwardRef<Ref, ReactInputProps & SwitchProps>(
  (props, ref) => {
    const { className, onChange, isChecked, isDisabled, ...rest } = props

    const cls = clsx(className, SwitchStyles.base)

    const trackCls = clsx(
      SwitchStyles.track.base,
      isChecked && SwitchStyles.track.checked,
      isDisabled && SwitchStyles.track.disabled,
    )

    const thumbCls = clsx(
      SwitchStyles.thumb.base,
      isChecked && SwitchStyles.thumb.checked,
      isDisabled && SwitchStyles.thumb.disabled,
    )

    return (
      // The label is required for the trick
      <label className={cls}>
        <input
          ref={ref}
          type="checkbox"
          className="hidden"
          onChange={onChange}
          {...rest}
        />
        <div className={trackCls}></div>
        <div className={thumbCls}></div>
      </label>
    )
  },
)

Switch.displayName = 'Switch'
