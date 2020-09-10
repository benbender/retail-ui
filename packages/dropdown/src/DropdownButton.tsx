import * as React from 'react'

import { DropdownValue, useDropdownCtx } from './DropdownContext'

type Children = (props: DropdownValue) => React.ReactNode

interface DropdownButtonProp {
  children: Children
}

export const DropdownButton: React.FC<DropdownButtonProp> = (props) => {
  const { children } = props

  const { toggleOpen, isOpen } = useDropdownCtx()

  return <React.Fragment>{children({ toggleOpen, isOpen })}</React.Fragment>
}
