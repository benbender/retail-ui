import clsx from 'clsx'
import * as React from 'react'

import { StatusStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type StatusPosition = keyof typeof StatusStyles['position']
type StatusColor = keyof typeof StatusStyles['color']

export type StatusProps = {
  text?: React.ReactNode
  // count?: React.ReactNode
  position?: StatusPosition
  color?: StatusColor
  // size
  // icon
  // number
  // Ribbon
}

export const Status = React.forwardRef<Ref, ReactDivProps & StatusProps>(
  (props, ref) => {
    const {
      className,
      children,
      text,
      position = 'bottom-right',
      color = 'busy',
      ...rest
    } = props

    let statusToRender
    const cls = clsx(className, StatusStyles.base)

    const positionCls = StatusStyles.position
    const colorCls = StatusStyles.color

    if (text) {
      const textStatusCls = clsx()
      statusToRender = <span className={textStatusCls}>{text}</span>
    } else {
      // No text, status only
      const emptyStatusCls = clsx(positionCls[position], colorCls[color])
      statusToRender = <span className={emptyStatusCls}>{text}</span>
    }

    return (
      <div ref={ref} className={cls} {...rest}>
        {children}
        {statusToRender}
      </div>
    )
  },
)

Status.displayName = 'Status'
