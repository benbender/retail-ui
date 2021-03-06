import clsx from 'clsx'
import * as React from 'react'

import {
  EmptyPageButton,
  NextNavigationButton,
  PageButton,
  PrevNavigationButton,
} from './PaginationButtons'
import { PaginationStyles } from './styles'

type ReactDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
type Ref = HTMLDivElement

export type PaginationProps = {
  totalResults: number
  resultsPerPage: number
  label?: string
  onChange?: (activePage: number) => void
}

export const Pagination = React.forwardRef<
  Ref,
  ReactDivProps & PaginationProps
>((props, ref) => {
  const {
    className,
    totalResults,
    resultsPerPage,
    label,
    onChange,
    ...rest
  } = props

  const [pages, setPages] = React.useState<(number | string)[]>([])
  const [activePage, setActivePage] = React.useState(1)

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage)
  const FIRST_PAGE = 1
  const LAST_PAGE = TOTAL_PAGES
  const MAX_VISIBLE_PAGES = 7

  const handlePreviousClick = () => {
    setActivePage(activePage - 1)
  }

  const handleNextClick = () => {
    setActivePage(activePage + 1)
  }

  React.useEffect(() => {
    // [1], 2, 3, 4, 5, ..., 12 case #1
    // 1, [2], 3, 4, 5, ..., 12
    // 1, 2, [3], 4, 5, ..., 12
    // 1, 2, 3, [4], 5, ..., 12
    // 1, ..., 4, [5], 6, ..., 12 case #2
    // 1, ..., 5, [6], 7, ..., 12
    // 1, ..., 6, [7], 8, ..., 12
    // 1, ..., 7, [8], 9, ..., 12
    // 1, ..., 8, [9], 10, 11, 12 case #3
    // 1, ..., 8, 9, [10], 11, 12
    // 1, ..., 8, 9, 10, [11], 12
    // 1, ..., 8, 9, 10, 11, [12]
    // [1], 2, 3, 4, 5, ..., 8
    // always show first and last
    // max of 7 pages shown (incl. [...])
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1))
    } else if (activePage < 5) {
      // #1 active page < 5 -> show first 5
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES])
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      // #2 active page >= 5 && < TOTAL_PAGES - 3
      setPages([
        1,
        '...',
        activePage - 1,
        activePage,
        activePage + 1,
        '...',
        TOTAL_PAGES,
      ])
    } else {
      // #3 active page >= TOTAL_PAGES - 3 -> show last
      setPages([
        1,
        '...',
        TOTAL_PAGES - 4,
        TOTAL_PAGES - 3,
        TOTAL_PAGES - 2,
        TOTAL_PAGES - 1,
        TOTAL_PAGES,
      ])
    }
  }, [activePage])

  React.useEffect(() => {
    if (onChange) {
      onChange(activePage)
    }
  }, [activePage])

  const wrapperCls = clsx(className, PaginationStyles.wrapper)
  const cls = clsx(className, PaginationStyles.base)
  const labelCls = clsx(PaginationStyles.label)

  return (
    <div ref={ref} className={wrapperCls} {...rest}>
      <span className={labelCls}>
        {label ?? (
          <React.Fragment>
            Showing {activePage * resultsPerPage - resultsPerPage + 1}-
            {Math.min(activePage * resultsPerPage, totalResults)} of{' '}
            {totalResults}
          </React.Fragment>
        )}
      </span>
      <span className="col-span-2"></span>
      {/* <!-- Pagination --> */}
      <span className={cls}>
        <nav aria-label="navigation">
          <ul className="inline-flex items-center">
            <li>
              <PrevNavigationButton
                onClick={handlePreviousClick}
                disabled={activePage === FIRST_PAGE}
              />
            </li>
            {pages.map((p) => (
              <li key={`${p}`}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    page={Number(p)}
                    isActive={p === activePage}
                    onClick={() => setActivePage(Number(p))}
                  />
                )}
              </li>
            ))}
            <li>
              <NextNavigationButton
                disabled={activePage === LAST_PAGE}
                onClick={handleNextClick}
              />
            </li>
          </ul>
        </nav>
      </span>
    </div>
  )
})

Pagination.displayName = 'Pagination'
