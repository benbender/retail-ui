import * as React from 'react'
import { ThemeProvider } from '@retail-ui/theme'
import '../styles/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}

const ThemeWrapper = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [ThemeWrapper]
