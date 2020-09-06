import * as React from 'react'

import { DropdownStyles } from './styles'

interface DropdownDividerProps {}

export const DropdownDivider: React.FC<DropdownDividerProps> = (props) => {
  const { children } = props

  const cls = DropdownStyles.divide

  return <div className={cls}>{children}</div>
}
