import { useToggle } from '@retail-ui/hooks'
import clsx from 'clsx'
import * as React from 'react'

import { DropdownProvider, DropdownValue } from './DropdownContext'
import { DropdownStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export interface DropdownProps {
  className?: string
  onOpenChange?: (isOpen: boolean) => void
  children?: ((value: DropdownValue) => React.ReactNode) | React.ReactNode
}

export const Dropdown = React.forwardRef<Ref, ReactDivProps & DropdownProps>(
  (props, ref) => {
    const { children, onOpenChange, ...rest } = props

    const [isOpen, toggleOpen] = useToggle(false)

    React.useEffect(() => {
      if (onOpenChange) {
        onOpenChange(isOpen)
      }
    }, [isOpen])

    const dropdownValue = React.useMemo(
      () => ({
        isOpen,
        toggleOpen,
      }),
      [isOpen, toggleOpen],
    )

    const cls = clsx(DropdownStyles.base)

    return (
      <DropdownProvider value={dropdownValue}>
        <div className={cls} ref={ref} {...rest}>
          {children}
        </div>
      </DropdownProvider>
    )
  },
)

Dropdown.displayName = 'Dropdown'
