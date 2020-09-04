import clsx from 'clsx'
import React from 'react'

type Ref = HTMLInputElement
type ReactInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled'
>

export type SwitchProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  isChecked?: boolean
  isDisabled?: boolean
}

export const Switch = React.forwardRef<Ref, ReactInputProps & SwitchProps>(
  (props, ref) => {
    const { className, onChange, isChecked, isDisabled, ...rest } = props

    // class="
    const cls = clsx(
      'relative inline-block align-middle cursor-pointer select-none bg-transparent focus-within:shadow-outline',
    )
    // "

    // class="
    const trackCls = clsx(
      `w-12 h-6 bg-purple-600 dark:bg-gray-600 rounded-full shadow-inner`,
      isChecked && `transform transition-colors bg-green-500`,
      isDisabled && `bg-purple-500`,
    )
    // "

    // class="
    const thumbCls = clsx(
      'transition-all duration-300 ease-in-out absolute top-0 left-0 w-6 h-6 bg-white border-2 border-purple-600 rounded-full shadow',
      isChecked && `transform translate-x-full border-green-500`,
      isDisabled && `bg-purple-100 border-purple-500`,
    )
    // "

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
