import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const DotsHorizontalOutline = React.forwardRef<
  SVGRef,
  ReactSVGProps & IconProps
>((props, ref) => {
  return (
    // <Icon ={ref} {...props} viewBox="0 0 20 20" isSolid>
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </Icon>
  )
})

DotsHorizontalOutline.displayName = 'DotsHorizontalOutline'
