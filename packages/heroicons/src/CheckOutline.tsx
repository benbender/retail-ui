import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const CheckOutline = React.forwardRef<SVGRef, ReactSVGProps & IconProps>(
  (props, ref) => {
    return (
      <Icon {...props} ref={ref} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </Icon>
    )
  },
)

CheckOutline.displayName = 'CheckOutline'
