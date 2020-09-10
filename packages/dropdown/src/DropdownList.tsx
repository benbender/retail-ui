import { Transition } from '@retail-ui/transition'
import clsx from 'clsx'
import * as React from 'react'
import FocusLock from 'react-focus-lock'
import { useClickAway, useKey } from 'react-use'

import { useDropdownCtx } from './DropdownContext'
import { DropdownStyles } from './styles'

type DropdownListSize = keyof typeof DropdownStyles['list']['size']

interface DropdownListProps {
  className?: string
  isAlignRight?: boolean
  size?: DropdownListSize
}

export const DropdownList: React.FC<DropdownListProps> = (props) => {
  const { className, isAlignRight, size = 'base', children } = props
  const { toggleOpen, isOpen } = useDropdownCtx()

  const ref = React.useRef<HTMLDivElement>(null)
  useClickAway(ref, () => toggleOpen(false), ['click'])
  useKey('Escape', () => toggleOpen(false))

  // class="
  const cls = clsx(
    className,
    DropdownStyles.list.base,
    isAlignRight && `-translate-x-full`,
    size && DropdownStyles.list.size[size],
  )

  const wrapperCsl = clsx(`absolute`, isAlignRight && `z-10 right-0 z-10`)

  // "
  return (
    <Transition
      show={isOpen}
      enter="transition duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="div"
      className={wrapperCsl}
    >
      <FocusLock returnFocus>
        <div className={cls} ref={ref}>
          {children}
        </div>
      </FocusLock>
    </Transition>
  )
}
