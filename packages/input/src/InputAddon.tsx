import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type ReactDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, ''>
type Ref = HTMLDivElement

type InputAddonPosition = keyof Theme['InputStyles']['addon']
type InputAddonElement = keyof Theme['InputStyles']['addon']['left']['element']

type InputAddonProps = {
  position?: InputAddonPosition
  element?: InputAddonElement
}

export const InputAddon = React.forwardRef<
  Ref,
  ReactDivProps & InputAddonProps
>((props) => {
  const { children, className, position = 'left', element = 'icon' } = props

  const {
    theme: { InputStyles },
  } = useThemeCtx()

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
