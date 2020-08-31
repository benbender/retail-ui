import { defaultTheme, ThemeProvider } from '@retail-ui/theme'
import { render } from '@testing-library/react'
import * as React from 'react'

import * as Heroicons from '../stories/Heroicons.stories'

describe('Heroicons', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider value={{ theme: defaultTheme }}>
        <Heroicons.Simple />
      </ThemeProvider>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
