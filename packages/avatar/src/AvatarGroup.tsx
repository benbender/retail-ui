import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type AvatarGroupProps = {
  // maxCount: number
}

export const AvatarGroup = React.forwardRef<
  Ref,
  ReactDivProps & AvatarGroupProps
>((props, ref) => {
  const {
    theme: { AvatarStyles },
  } = useThemeCtx()
  const { children, ...rest } = props
  const cls = clsx(AvatarStyles.group.base)
  return (
    <div ref={ref} className={cls} {...rest}>
      {children}
    </div>
  )
})

AvatarGroup.displayName = 'AvatarGroup'
