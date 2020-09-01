import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

export type BreadcrumbProps = React.PropsWithChildren<{
  className?: string
}>
type Ref = HTMLUListElement

export const Breadcrumb = React.forwardRef<Ref, BreadcrumbProps>(
  (props, ref) => {
    const { children, className } = props
    const {
      theme: { BreadcrumbStyles },
    } = useThemeCtx()

    const cls = clsx(className, BreadcrumbStyles.base)

    return (
      <ul ref={ref} className={cls}>
        {children}
      </ul>
    )
  },
)

Breadcrumb.displayName = 'Breadcrumb'
