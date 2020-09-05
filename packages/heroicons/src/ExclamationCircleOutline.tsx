import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const ExclamationCircleOutline = React.forwardRef<
  SVGRef,
  ReactSVGProps & IconProps
>((props, ref) => {
  return (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Icon>
  )
})

ExclamationCircleOutline.displayName = 'ExclamationCircleOutline'
