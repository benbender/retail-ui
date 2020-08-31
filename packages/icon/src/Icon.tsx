import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type SVGRef = SVGSVGElement
export type IconSize = keyof Theme['IconStyles']['size']
export type IconColor = keyof Theme['IconStyles']['color']

export type IconProps = React.PropsWithChildren<{
  className?: string
  size?: IconSize
  color?: IconColor
  style?: React.CSSProperties
}>

type SVGProps = {
  viewBox: string
  isSolid?: boolean
}

export const Icon = React.forwardRef<SVGRef, IconProps & SVGProps>(
  (props, ref) => {
    const {
      viewBox,
      isSolid = false,
      children,
      className,
      style,
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
        style={style}
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
