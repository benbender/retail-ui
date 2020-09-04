import { ButtonIcon } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useDrawerCtx } from './DrawerContext'

interface DrawerHeaderProps {
  className?: string
}
export const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
  const { children, className } = props
  const { onClose } = useDrawerCtx()
  const {
    theme: { DrawerStyles },
  } = useThemeCtx()
  const headerStyles = DrawerStyles.header

  const cls = clsx(className, headerStyles)

  return (
    <div className={cls}>
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
