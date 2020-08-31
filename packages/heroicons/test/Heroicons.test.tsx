import { render } from '@testing-library/react'
import * as React from 'react'

import * as Heroicons from '../stories/Heroicons.stories'

describe('Heroicons', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Heroicons.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
