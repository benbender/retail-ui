import clsx from 'clsx'
import * as React from 'react'

import { DropdownStyles } from './styles'

type DropdownSize = keyof typeof DropdownStyles['header']['size']

interface DropdownHeaderProps {
  size?: DropdownSize
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = (props) => {
  const { children, size = 'base' } = props

  const cls = clsx(
    DropdownStyles.header.base && DropdownStyles.header.size[size],
  )

  return <p className={cls}>{children}</p>
}
