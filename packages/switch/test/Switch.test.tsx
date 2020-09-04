import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Switch from '../stories/Switch.stories'

describe('Switch', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Switch.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
