---
to: packages/<%= name %>/src/<%= h.changeCase.pascal(name) %>.tsx
---
import clsx from 'clsx'
import * as React from 'react'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

export type <%= h.changeCase.pascal(name) %>Props = {
  
}

export const <%= h.changeCase.pascal(name) %> = React.forwardRef<Ref, ReactDivProps & <%= h.changeCase.pascal(name) %>Props>((props, ref) => {
  const { children, className, ...rest } = props

  const cls = clsx(className)

  return <div ref={ref} className={cls} {...rest}>{children}</div>
})

<%= h.changeCase.pascal(name) %>.displayName = '<%= h.changeCase.pascal(name) %>'
