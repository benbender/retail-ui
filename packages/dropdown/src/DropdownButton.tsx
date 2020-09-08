import * as React from 'react'

import { useDropdownCtx } from './DropdownContext'

type ReactButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement>
type Ref = HTMLButtonElement

export type DropdownButtonProps = {}

export const DropdownButton = React.forwardRef<
  Ref,
  ReactButtonProp & DropdownButtonProps
>((props, ref) => {
  const { onClick, ...rest } = props

  const { toggleOpen } = useDropdownCtx()

  return (
    <button
      ref={ref}
      onClick={() => {
        toggleOpen()
      }}
      {...rest}
    />
  )
})

DropdownButton.displayName = 'DropdownButton'
