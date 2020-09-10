import { Transition } from '@retail-ui/transition'
import clsx from 'clsx'
import * as React from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { useClickAway, useKey, useMountedState } from 'react-use'

import { DrawerProvider } from '../src/DrawerContext'
import { DrawerStyles } from '../src/styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type DrawerSize = keyof typeof DrawerStyles['size']
type DrawerPosition = keyof typeof DrawerStyles['position']

export type DrawerProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  size?: DrawerSize
  position?: DrawerPosition
}

export const Drawer = React.forwardRef<Ref, ReactDivProps & DrawerProps>(
  (props, ref) => {
    const {
      children,
      isOpen,
      onClose,
      onSubmit,
      size = 'base',
      position = 'left',
      ...rest
    } = props
    const isMounted = useMountedState()

    const contentRef = React.useRef<HTMLDivElement>(null)
    useClickAway(contentRef, () => onClose())
    useKey('Escape', () => onClose())

    const positionStyles = DrawerStyles.position[position]

    const cls = clsx(
      DrawerStyles.base,
      DrawerStyles.size[size],
      positionStyles.base,
    )

    const backdropCls = clsx(DrawerStyles.backdrop)

    const DrawerValue = React.useMemo(() => {
      return {
        onClose,
        onSubmit,
      }
    }, [onClose, onSubmit])

    const modalComponent = (
      <DrawerProvider value={DrawerValue}>
        <Transition show={isOpen}>
          {/* Backdrop */}
          <div className={backdropCls} ref={ref}>
            {/* Drawer main class="*/}
            <Transition.Child
              enter="transition ease-out duration-150"
              enterFrom={`opacity-0 transform ${positionStyles.transition}`}
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo={`opacity-0 transform ${positionStyles.transition}`}
            >
              <FocusLock returnFocus>
                <div
                  ref={contentRef}
                  className={cls}
                  role="dialog"
                  aria-hidden="true"
                  {...rest}
                >
                  {children}
                </div>
              </FocusLock>
            </Transition.Child>
            {/* "*/}
          </div>
        </Transition>
      </DrawerProvider>
    )
    return isMounted() ? createPortal(modalComponent, document.body) : null
  },
)

Drawer.displayName = 'Drawer'
