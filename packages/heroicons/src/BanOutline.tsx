import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const BanOutline = React.forwardRef<SVGRef, ReactSVGProps & IconProps>(
  (props, ref) => {
    return (
      <Icon {...props} ref={ref} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </Icon>
    )
  },
)

BanOutline.displayName = 'BanOutline'
