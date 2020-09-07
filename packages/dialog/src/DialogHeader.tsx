import { ButtonIcon } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import clsx from 'clsx'
import * as React from 'react'

import { useDialogCtx } from './DialogContext'
import { DialogStyles } from './styles'

interface DialogHeaderProps {
  className?: string
}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
  const { children, className, ...rest } = props
  const { onClose } = useDialogCtx()

  const headerStyles = DialogStyles.header

  const cls = clsx(className, headerStyles)

  return (
    <div className={cls} {...rest}>
      {children}
      <ButtonIcon
        icon={XSolid}
        variant="light"
        onClick={onClose}
        color="secondary"
      />
    </div>
  )
}
