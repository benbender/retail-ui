import { useClickAwayOrEsc } from '@retail-ui/hooks'
import { Transition } from '@tailwindui/react'
import clsx from 'clsx'
import * as React from 'react'
import FocusLock from 'react-focus-lock'

import { useDropdownCtx } from './DropdownContext'
import { DropdownStyles } from './styles'

type DropdownListAlign = keyof typeof DropdownStyles['list']['align']
type DropdownListSize = keyof typeof DropdownStyles['list']['size']

interface DropdownListProps {
  className?: string
  align?: DropdownListAlign
  size?: DropdownListSize
}

export const DropdownList: React.FC<DropdownListProps> = (props) => {
  const { className, align = 'left', size = 'base', children } = props
  const { toggleOpen, isOpen } = useDropdownCtx()

  const ref = useClickAwayOrEsc(() => toggleOpen(false))

  const cls = clsx(
    className,
    DropdownStyles.list.base,
    align && DropdownStyles.list.align[align],
    size && DropdownStyles.list.size[size],
  )

  return (
    <Transition
      show={isOpen}
      enter="transition duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="ul"
      className={cls}
    >
      <FocusLock returnFocus>
        <div ref={ref}>{children}</div>
      </FocusLock>
    </Transition>
  )
}
