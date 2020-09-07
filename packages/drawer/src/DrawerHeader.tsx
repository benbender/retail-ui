import { ButtonIcon } from '@retail-ui/button-icon'
import { XSolid } from '@retail-ui/heroicons'
import clsx from 'clsx'
import * as React from 'react'

import { useDrawerCtx } from './DrawerContext'
import { DrawerStyles } from './styles'

interface DrawerHeaderProps {
  className?: string
}
export const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
  const { children, className } = props
  const { onClose } = useDrawerCtx()

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
