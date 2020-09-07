import clsx from 'clsx'
import * as React from 'react'

import { AvatarStyles } from './styles'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type AvatarGroupProps = {
  // maxCount: number
}

export const AvatarGroup = React.forwardRef<
  Ref,
  ReactDivProps & AvatarGroupProps
>((props, ref) => {
  const { children, ...rest } = props
  const cls = clsx(AvatarStyles.group.base)
  return (
    <div ref={ref} className={cls} {...rest}>
      {children}
    </div>
  )
})

AvatarGroup.displayName = 'AvatarGroup'
