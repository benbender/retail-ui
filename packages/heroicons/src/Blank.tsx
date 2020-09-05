import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const BlankSolid = React.forwardRef<SVGRef, ReactSVGProps & IconProps>(
  (props, ref) => {
    return (
      // <Icon {...props} ref={ref} viewBox="0 0 20 20" isSolid>
      <Icon {...props} ref={ref} viewBox="0 0 24 24">
        <path />
      </Icon>
    )
  },
)

BlankSolid.displayName = 'BlankSolid'
