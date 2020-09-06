import clsx from 'clsx'
import React from 'react'

import { DropdownStyles } from './styles'

type DropdownItemSize = keyof typeof DropdownStyles['item']['size']

interface DropdownItemProps {
  onClick?: () => void
  className?: string
  size?: DropdownItemSize
}

export const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { className, size, children, onClick } = props

  const cls = clsx(
    className,
    DropdownStyles.item.base,
    size && DropdownStyles.item.size[size],
  )
  return (
    <li
      className={cls}
      role="menuitem"
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && onClick) {
          onClick()
        }
      }}
    >
      {children}
    </li>
  )
}
