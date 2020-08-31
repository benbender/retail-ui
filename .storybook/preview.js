import * as React from 'react'
import { ThemeProvider, defaultTheme } from '@retail-ui/theme'
import '../styles/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}

const ThemeWrapper = (Story) => {
  return (
    <ThemeProvider value={{ theme: defaultTheme }}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [ThemeWrapper]
