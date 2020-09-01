import { IconProps } from '@retail-ui/icon'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type AvatarSize = keyof Theme['AvatarStyles']['size']
// export type AvatarStatus = keyof Theme['Avatar']['status']

export type AvatarProps = {
  size?: AvatarSize
  // shape:
  className?: string
  // image
  alt?: string
  src?: string
  // text
  title?: string
  // icon
  icon?: React.ElementType<IconProps>
  // status: AvatarStatus
}
type Ref = HTMLDivElement

export const Avatar = React.forwardRef<Ref, AvatarProps>((props, ref) => {
  const { size = 'base', className, alt, src, title, icon } = props
  const {
    theme: { AvatarStyles },
  } = useThemeCtx()

  const sizeCls = AvatarStyles.size

  const cls = clsx(
    AvatarStyles.base,
    sizeCls[size],
    className,
    icon && AvatarStyles.avatarIcon,
  )

  let childrenToRender // priority image => icon => text
  if (src) {
    const imgCls = clsx(AvatarStyles.image.base)
    childrenToRender = (
      <img className={imgCls} src={src} alt={alt} loading="lazy" />
    )
  } else if (icon) {
    const Icon = icon
    const iconSizeCls = AvatarStyles.icon.size
    const iconCls = clsx(iconSizeCls[size])
    childrenToRender = <Icon className={iconCls} />
  } else {
    // title
    const titleSizeCls = AvatarStyles.title.size
    const titleCls = clsx(AvatarStyles.title.base, titleSizeCls[size])
    childrenToRender = <span className={titleCls}>PJ</span>
  }

  return (
    <div ref={ref} className={cls}>
      {childrenToRender}
      {/* Some shadow */}
      <div
        className="absolute inset-0 rounded-full shadow-inner"
        aria-hidden="true"
      ></div>
    </div>
  )
})

Avatar.displayName = 'Avatar'
