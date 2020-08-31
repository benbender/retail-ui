import * as React from 'react'

import { IconButtonStyles } from './styles'

export type IconButtonProps = React.PropsWithChildren<{
  onClick?: () => void
}>
type Ref = HTMLDivElement

export const IconButton = React.forwardRef<Ref, IconButtonProps>(
  (props, ref) => {
    const { children } = props
    return <div ref={ref}>{children}</div>
  },
)

IconButton.displayName = 'IconButton'
