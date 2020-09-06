import * as React from 'react'

interface RadioGroupProps {}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { children } = props
  return <div>RadioGroup {children}</div>
}
