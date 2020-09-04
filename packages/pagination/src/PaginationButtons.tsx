import * as React from 'react'
export interface NavigationProps {
  onClick: () => void
  disabled?: boolean
}

export const PrevNavigationButton: React.FC<NavigationProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
      aria-label="Previous"
    >
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

export const NextNavigationButton: React.FC<NavigationProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
      aria-label="Next"
    >
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

export interface PageButtonProps {
  page: number
  isActive: boolean
  onClick: () => void
}

export const PageButton: React.FC<PageButtonProps> = ({
  page,
  isActive,
  onClick,
}) => {
  const primaryCls =
    'px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'
  const ghostCls =
    'px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'

  const cls = isActive ? primaryCls : ghostCls
  return (
    <button onClick={onClick} className={cls}>
      {page || 0}
    </button>
  )
}

export const EmptyPageButton = () => <span className="px-2 py-1">...</span>
