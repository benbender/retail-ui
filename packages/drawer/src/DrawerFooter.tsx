import { ActionButtons } from '@retail-ui/action-buttons'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useDrawerCtx } from './DrawerContext'

interface DrawerFooterProps {
  className?: string
}

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
  const { className } = props
  const {
    theme: { DrawerStyles },
  } = useThemeCtx()
  const { onClose, onSubmit } = useDrawerCtx()

  const footerStyles = DrawerStyles.footer

  const cls = clsx(className, footerStyles)

  return (
    <div className={cls}>
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
