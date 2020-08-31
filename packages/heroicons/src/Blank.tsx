import { Icon, IconProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const BlankSolid = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    // <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
    <Icon ref={ref} {...props} viewBox="0 0 24 24">
      <path />
    </Icon>
  )
})

BlankSolid.displayName = 'BlankSolid'
