import { useClickAway, useKeyPress } from 'ahooks'
import * as React from 'react'

export const useClickAwayOrEsc = (handleFn: () => void) => {
  const ref = React.useRef<HTMLDivElement>(null)
  useClickAway(() => {
    handleFn()
  }, ref)

  useKeyPress('Escape', () => {
    handleFn()
  })
  return ref
}
