import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Badge from '../stories/Badge.stories'

describe('Badge', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Badge.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
