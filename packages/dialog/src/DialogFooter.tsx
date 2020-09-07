import { ActionButtons } from '@retail-ui/action-buttons'
import clsx from 'clsx'
import * as React from 'react'

import { useDialogCtx } from './DialogContext'
import { DialogStyles } from './styles'

interface DialogFooterProps {
  className?: string
}

export const DialogFooter: React.FC<DialogFooterProps> = (props) => {
  const { className, ...rest } = props

  const { onClose, onSubmit } = useDialogCtx()

  const footerStyles = DialogStyles.footer

  const cls = clsx(className, footerStyles)

  return (
    <div className={cls} {...rest}>
      <ActionButtons
        cancelProps={{ className: `sm:w-auto` }}
        submitProps={{
          className: `sm:w-auto`,
        }}
        onClickCancel={onClose}
        onClickSubmit={onSubmit}
      />
    </div>
  )
}

DialogFooter.displayName = 'DialogFooter'
