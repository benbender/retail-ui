import { useClickAwayOrEsc, useMountedState } from '@retail-ui/hooks'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import { Transition } from '@retail-ui/transition'
import clsx from 'clsx'
import * as React from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'

import { DialogProvider } from './DialogContext'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type DialogSize = keyof Theme['DialogStyles']['size']

export type DialogProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  size?: DialogSize
}

export const Dialog = React.forwardRef<Ref, ReactDivProps & DialogProps>(
  (props, ref) => {
    const {
      children,
      className,
      isOpen,
      onClose,
      onSubmit,
      size = 'base',
      ...rest
    } = props

    const {
      theme: { DialogStyles },
    } = useThemeCtx()

    const contentRef = useClickAwayOrEsc(onClose)

    const isMounted = useMountedState()

    const cls = clsx(className, DialogStyles.base, DialogStyles.size[size])

    const backdropCls = clsx(DialogStyles.backdrop)

    const dialogValue = React.useMemo(() => {
      return {
        onClose,
        onSubmit,
      }
    }, [onClose, onSubmit])

    const modalComponent = (
      <DialogProvider value={dialogValue}>
        <Transition show={isOpen}>
          <div className={backdropCls} ref={ref}>
            {/* Backdrop */}
            {/* Modal main */}
            <Transition.Child
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 transform scale-105 origin-center"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150 "
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 transform scale-105 origin-center"
              className="flex items-center justify-center h-screen"
            >
              <FocusLock returnFocus>
                <div role="dialog" aria-hidden="true">
                  <div ref={contentRef} className={cls} {...rest}>
                    {children}
                  </div>
                </div>
              </FocusLock>
            </Transition.Child>
          </div>
        </Transition>
      </DialogProvider>
    )
    return isMounted() ? createPortal(modalComponent, document.body) : null
  },
)

Dialog.displayName = 'Dialog'
