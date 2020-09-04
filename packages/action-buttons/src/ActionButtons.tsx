import { Button, ButtonProps } from '@retail-ui/button'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type ActionButtonsProps = ButtonProps & {
  cancelText?: string
  submitText?: string
  onClickCancel?: () => void
  onClickSubmit?: () => void
  submitProps?: ButtonProps
  cancelProps?: ButtonProps
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
  const { theme } = useThemeCtx()

  const actionButtonStyle = theme.ActionButtonsStyles

  const cls = clsx(actionButtonStyle.base, isBlock && 'w-full')

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
