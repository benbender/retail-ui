import { Icon, IconProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const ArrowCircleRightOutline = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </Icon>
    )
  },
)

ArrowCircleRightOutline.displayName = 'ArrowCircleRightOutline'
