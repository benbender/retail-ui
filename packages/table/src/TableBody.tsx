import * as React from 'react'

export const TableBody: React.FC = ({ children }) => {
  return (
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      {children}
    </tbody>
  )
}
