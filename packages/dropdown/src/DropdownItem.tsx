import clsx from 'clsx'
import React from 'react'

import { useDropdownCtx } from './DropdownContext'
import { DropdownStyles } from './styles'

type DropdownItemSize = keyof typeof DropdownStyles['item']['size']

interface DropdownItemProps {
  onClick?: () => void
  className?: string
  size?: DropdownItemSize
}

export const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { className, size, children, onClick } = props
  const { toggleOpen } = useDropdownCtx()

  const cls = clsx(
    className,
    DropdownStyles.item.base,
    size && DropdownStyles.item.size[size],
  )

  const handleOnCick = React.useCallback(() => {
    if (onClick) {
      onClick()
    }
    toggleOpen()
  }, [onClick, toggleOpen])

  return (
    <button className={cls} role="menuitem" onClick={handleOnCick}>
      {children}
    </button>
  )
}
