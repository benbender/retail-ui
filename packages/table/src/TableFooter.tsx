import { Pagination, PaginationProps } from '@retail-ui/pagination'
import * as React from 'react'

type TableFooterProps = PaginationProps

export const TableFooter: React.FC<TableFooterProps> = (props) => {
  const { label, onChange, resultsPerPage, totalResults } = props
  return (
    <Pagination
      onChange={onChange}
      resultsPerPage={resultsPerPage}
      totalResults={totalResults}
      label={label}
    />
  )
}
