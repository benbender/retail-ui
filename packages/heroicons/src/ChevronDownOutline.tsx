import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const ChevronDownOutline = React.forwardRef<
  SVGRef,
  ReactSVGProps & IconProps
>((props, ref) => {
  return (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </Icon>
  )
})

ChevronDownOutline.displayName = 'ChevronDownOutline'
