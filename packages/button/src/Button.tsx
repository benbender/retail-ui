import React, { forwardRef, MouseEvent as ReactMouseEvent } from 'react'

export interface ButtonProps {
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = () => {
  return <button>Button</button>
}

Button.displayName = 'Button'
