import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

interface DialogBodyProps {
  className?: string
}

export const DialogBody: React.FC<DialogBodyProps> = (props) => {
  const { children, className, ...rest } = props
  const {
    theme: { DialogStyles },
  } = useThemeCtx()

  const bodyStyles = DialogStyles.body

  const cls = clsx(className, bodyStyles)

  return (
    <p className={cls} {...rest}>
      {children}
    </p>
  )
}
