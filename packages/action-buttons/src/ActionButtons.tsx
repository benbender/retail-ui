import { Button, ButtonProps } from '@retail-ui/button'
import clsx from 'clsx'
import * as React from 'react'

import { ActionButtonsStyles } from './styles'

type ReactButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>

export type ActionButtonsProps = ButtonProps & {
  cancelText?: string
  submitText?: string
  onClickCancel?: () => void
  onClickSubmit?: () => void
  submitProps?: ReactButtonProps & ButtonProps
  cancelProps?: ReactButtonProps & ButtonProps
}

export const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
  const {
    cancelText = 'Cancel',
    submitText = 'Submit',
    onClickCancel,
    onClickSubmit,
    submitProps,
    cancelProps,
    color = 'primary',
    isLoading,
    isBlock,
    size = 'sm',
    ...rest
  } = props

  const cls = clsx(ActionButtonsStyles.base, isBlock && 'w-full')

  return (
    <div className={cls}>
      <Button
        color="secondary"
        onClick={onClickCancel}
        type="button"
        size={size}
        {...rest}
        {...cancelProps}
      >
        {cancelText}
      </Button>
      <Button
        color={color}
        onClick={onClickSubmit}
        isLoading={isLoading}
        size={size}
        type="button"
        {...rest}
        {...submitProps}
      >
        {submitText}
      </Button>
    </div>
  )
}
