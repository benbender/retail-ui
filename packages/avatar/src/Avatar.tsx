import { Theme, useThemeCtx } from '@retail-ui/theme'
import { cloneElement } from '@retail-ui/utils'
import clsx from 'clsx'
import * as React from 'react'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type AvatarSize = keyof Theme['AvatarStyles']['size']
// type AvatarStatus = keyof Theme['Avatar']['status']

export type AvatarProps = {
  size?: AvatarSize
  // shape:
  // image
  alt?: string
  src?: string
  // text
  title?: string
  // icon
  icon?: React.ReactNode
  // status: AvatarStatus
}

export const Avatar = React.forwardRef<Ref, ReactDivProps & AvatarProps>(
  (props, ref) => {
    const { size = 'base', className, alt, src, title, icon, ...rest } = props
    const {
      theme: { AvatarStyles },
    } = useThemeCtx()

    const sizeCls = AvatarStyles.size

    const cls = clsx(
      className,
      AvatarStyles.base,
      sizeCls[size],
      icon && AvatarStyles.avatarIcon,
    )

    let childrenToRender // priority image => icon => text
    if (src) {
      const imgCls = clsx(AvatarStyles.image.base)
      childrenToRender = (
        <img className={imgCls} src={src} alt={alt} loading="lazy" />
      )
    } else if (icon) {
      const iconSizeCls = AvatarStyles.icon.size
      childrenToRender = cloneElement(icon, { className: iconSizeCls })
    } else {
      // title
      const titleSizeCls = AvatarStyles.title.size
      const titleCls = clsx(AvatarStyles.title.base, titleSizeCls[size])
      childrenToRender = <span className={titleCls}>{title}</span>
    }

    return (
      <div ref={ref} className={cls} {...rest}>
        {childrenToRender}
        {/* Some shadow */}
        <div
          className="absolute inset-0 rounded-full shadow-inner"
          aria-hidden="true"
        ></div>
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'
