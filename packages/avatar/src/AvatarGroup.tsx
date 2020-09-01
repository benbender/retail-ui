import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type AvatarGroupProps = React.PropsWithChildren<{
  // maxCount: number
}>
type Ref = HTMLDivElement

export const AvatarGroup = React.forwardRef<Ref, AvatarGroupProps>(
  (props, ref) => {
    const {
      theme: { AvatarStyles },
    } = useThemeCtx()
    const { children } = props
    const cls = clsx(AvatarStyles.group.base)
    return (
      <div ref={ref} className={cls}>
        {children}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'
