import clsx from 'clsx'
import * as React from 'react'

import { DialogStyles } from './styles'

interface DialogBodyProps {
  className?: string
}

export const DialogBody: React.FC<DialogBodyProps> = (props) => {
  const { children, className, ...rest } = props

  const bodyStyles = DialogStyles.body

  const cls = clsx(className, bodyStyles)

  return (
    <p className={cls} {...rest}>
      {children}
    </p>
  )
}
