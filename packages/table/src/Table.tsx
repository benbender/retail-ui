import clsx from 'clsx'
import * as React from 'react'

type ReactDivProps = React.HTMLAttributes<HTMLTableElement>
type Ref = HTMLTableElement

export type TableProps = {}

export const Table = React.forwardRef<Ref, ReactDivProps & TableProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    const cls = clsx(className, `w-full overflow-x-auto`)

    return (
      <div className={cls} {...rest}>
        <table ref={ref} className="w-full whitespace-no-wrap">
          {children}
        </table>
      </div>
    )
  },
)

Table.displayName = 'Table'
