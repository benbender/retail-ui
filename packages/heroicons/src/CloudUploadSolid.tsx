import { Icon, IconProps, ReactSVGProps, SVGRef } from '@retail-ui/icon'
import React from 'react'

export const CloudUploadSolid = React.forwardRef<
  SVGRef,
  ReactSVGProps & IconProps
>((props, ref) => {
  return (
    <Icon {...props} ref={ref} viewBox="0 0 20 20" isSolid>
      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
      <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
    </Icon>
  )
})

CloudUploadSolid.displayName = 'CloudUploadSolid'
