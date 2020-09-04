import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type ImageFit = keyof Theme['ImageStyles']['fit']
export type ImageFitPosition = keyof Theme['ImageStyles']['fitPosition']

type ReactDivProps = React.HTMLAttributes<HTMLImageElement>
type Ref = HTMLImageElement

export type ImageProps = {
  src: string
  alt: string
  className?: string
  /** How the image object fits its bounds */
  fit?: ImageFit
  /* Positioning of the fitted image. */
  fitPosition?: ImageFitPosition
  /* Fix the width of image. Not responsive of screen width is smaller than image */
  isFixed?: boolean
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
}

export const Image = React.forwardRef<Ref, ReactDivProps & ImageProps>(
  (props, ref) => {
    const {
      children,
      className,
      alt,
      src,
      fit,
      fitPosition,
      isFixed,
      width,
      height,
    } = props

    const {
      theme: { ImageStyles },
    } = useThemeCtx()

    const cls = clsx(
      className,
      ImageStyles.base,
      isFixed && ImageStyles.fixed,
      fit && ImageStyles.fit[fit],
      fitPosition && ImageStyles.fitPosition[fitPosition],
    )

    return (
      <img
        className={cls}
        ref={ref}
        alt={alt}
        src={src}
        style={{
          width,
          height,
        }}
      >
        {children}
      </img>
    )
  },
)

Image.displayName = 'Image'
