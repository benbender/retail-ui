import { cloneElement } from '@retail-ui/utils'
import * as React from 'react'

import { useDropdownCtx } from './DropdownContext'
type ReactButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement>

export const DropdownButton: React.FC<ReactButtonProp> = (props) => {
  const { children, onClick, ...rest } = props

  const { toggleOpen } = useDropdownCtx()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toggleOpen()
    if (onClick) {
      onClick(e)
    }
  }

  const buttonChild = cloneElement(children, { onClick: handleClick, ...rest })

  return buttonChild
}
