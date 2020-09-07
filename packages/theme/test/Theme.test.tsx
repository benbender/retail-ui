import { render, screen } from '@retail-ui/test-utils'
import * as React from 'react'

import { ThemeProvider, useThemeCtx } from '../src'

describe('defaultTheme', () => {
  it('should return default theme value', () => {
    const ThemeConsumer: React.FC = () => {
      const { theme } = useThemeCtx()
      return <div>theme: {theme}</div>
    }
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    )

    expect(screen.getByText(/^theme:/).textContent).toBe('theme: light')
  })
})
