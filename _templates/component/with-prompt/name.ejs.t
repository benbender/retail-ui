---
to: packages/<%= name %>/src/<%= h.changeCase.pascal(name) %>.tsx
---
import * as React from 'react'

export type <%= h.changeCase.pascal(name) %>Props = React.PropsWithChildren<{
  
}>
type Ref = HTMLDivElement

export const <%= h.changeCase.pascal(name) %> = React.forwardRef<Ref, <%= h.changeCase.pascal(name) %>Props>((props, ref) => {
  const { children } = props
  return <div ref={ref}>{children}</div>
})

<%= h.changeCase.pascal(name) %>.displayName = '<%= h.changeCase.pascal(name) %>'

export default <%= h.changeCase.pascal(name) %>
