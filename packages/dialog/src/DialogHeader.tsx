import { ButtonIcon } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useDialogCtx } from './DialogContext'

interface DialogHeaderProps {
  className?: string
}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
  const { children, className, ...rest } = props
  const { onClose } = useDialogCtx()

  const {
    theme: { DialogStyles },
  } = useThemeCtx()

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
