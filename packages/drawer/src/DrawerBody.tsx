import clsx from 'clsx'
import * as React from 'react'

import { DrawerStyles } from './styles'

interface DrawerBodyProps {
  className?: string
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
  const { children, className } = props

  const headerStyles = DrawerStyles.body

  const cls = clsx(className, headerStyles)

  return <p className={cls}>{children}</p>
}
