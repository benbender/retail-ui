import { useControllableValue } from 'ahooks'
import clsx from 'clsx'
import * as React from 'react'

import { DropdownProvider, DropdownValue } from './DropdownContext'
import { DropdownStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export interface DropdownProps {
  className?: string
  isOpen?: boolean
  onChangeOpen?: (isOpen: boolean) => void
  defaultOpen?: boolean
  children?: ((value: DropdownValue) => React.ReactNode) | React.ReactNode
}

export const Dropdown = React.forwardRef<Ref, ReactDivProps & DropdownProps>(
  (props, ref) => {
    const { children, isOpen: isOpenProp, onChangeOpen, ...rest } = props

    const [isOpen, setIsOpen] = useControllableValue<boolean>(props, {
      defaultValue: false,
      defaultValuePropName: `defaultOpen`,
      valuePropName: `isOpen`,
      trigger: `onChangeOpen`,
    })

    const toggleOpen = React.useCallback(
      (newOpen?: boolean) => {
        setIsOpen(newOpen ?? !isOpen)
      },
      [isOpen],
    )

    const dropdownValue = React.useMemo(
      () => ({
        isOpen: Boolean(isOpen),
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
