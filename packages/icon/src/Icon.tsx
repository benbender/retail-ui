import clsx from 'clsx'
import * as React from 'react'

import { IconStyles } from './styles'

export type ReactSVGProps = React.SVGProps<SVGSVGElement>
export type SVGRef = SVGSVGElement

type IconSize = keyof typeof IconStyles['size']
type IconColor = keyof typeof IconStyles['color']

export type IconProps = {
  size?: IconSize
  color?: IconColor
  isSolid?: boolean
}

export const Icon = React.forwardRef<SVGRef, ReactSVGProps & IconProps>(
  (props, ref) => {
    const {
      viewBox,
      isSolid = false,
      children,
      className,
      size = 'base',
      color,
      ...rest
    } = props

    const sizeCls = IconStyles.size
    const colorCls = IconStyles.color

    const cls = clsx(
      sizeCls[size],
      color ? colorCls[color] : 'text-current',
      isSolid ? 'fill-current' : 'stroke-current',
      className,
    )

    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        fill="none"
        className={cls}
        aria-hidden="true"
        {...rest}
      >
        {children}
      </svg>
    )
  },
)

Icon.displayName = 'Icon'
