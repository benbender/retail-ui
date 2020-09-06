import clsx from 'clsx'
import * as React from 'react'

import { InputStyles } from './styles'

interface InputGroupProps {}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { children } = props

  const wrapperCls = clsx(InputStyles.wrapper)

  return <div className={wrapperCls}>{children}</div>
}
