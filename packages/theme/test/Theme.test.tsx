import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { defaultTheme, ThemeProvider, useThemeCtx } from '../src'

describe('defaultTheme', () => {
  it('should return default theme value', () => {
    const ThemeConsumer: React.FC = () => {
      const { theme } = useThemeCtx()
      return <div>block: {theme.ButtonStyles.block}</div>
    }
    render(
      <ThemeProvider value={{ theme: defaultTheme }}>
        <ThemeConsumer />
      </ThemeProvider>,
    )

    expect(screen.getByText(/^block:/).textContent).toBe('block: w-full')
  })
})
