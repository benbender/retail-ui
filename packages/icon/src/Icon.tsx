import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type ReactSVGProps = React.SVGProps<SVGSVGElement>
export type SVGRef = SVGSVGElement

type IconSize = keyof Theme['IconStyles']['size']
type IconColor = keyof Theme['IconStyles']['color']

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

    const { theme } = useThemeCtx()

    const sizeCls = theme.IconStyles.size
    const colorCls = theme.IconStyles.color

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
