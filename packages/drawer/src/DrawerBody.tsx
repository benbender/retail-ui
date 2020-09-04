import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

interface DrawerBodyProps {
  className?: string
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
  const { children, className } = props
  const {
    theme: { DrawerStyles },
  } = useThemeCtx()
  const headerStyles = DrawerStyles.body

  const cls = clsx(className, headerStyles)

  return <p className={cls}>{children}</p>
}
