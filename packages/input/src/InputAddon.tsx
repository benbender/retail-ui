import clsx from 'clsx'
import * as React from 'react'

import { InputStyles } from './styles'

type ReactDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, ''>
type Ref = HTMLDivElement

type InputAddonPosition = keyof typeof InputStyles['addon']
type InputAddonElement = keyof typeof InputStyles['addon']['left']['element']

type InputAddonProps = {
  position?: InputAddonPosition
  element?: InputAddonElement
}

export const InputAddon = React.forwardRef<
  Ref,
  ReactDivProps & InputAddonProps
>((props) => {
  const { children, className, position = 'left', element = 'icon' } = props

  const addonStyles = InputStyles.addon[position]

  const cls = clsx(
    className,
    addonStyles.base,
    element === 'button' && addonStyles.element.button,
    element === 'icon' && addonStyles.element.icon,
  )

  return <div className={cls}>{children}</div>
})

InputAddon.displayName = 'InputAddon'
