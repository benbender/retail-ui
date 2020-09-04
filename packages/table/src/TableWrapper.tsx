import React from 'react'

export const TableWrapper: React.FC = ({ children }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      {children}
    </div>
  )
}
