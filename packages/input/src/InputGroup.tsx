import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

interface InputGroupProps {}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { children } = props

  const {
    theme: { InputStyles },
  } = useThemeCtx()

  const wrapperCls = clsx(InputStyles.wrapper)

  return <div className={wrapperCls}>{children}</div>
}
