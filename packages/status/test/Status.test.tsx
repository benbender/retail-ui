import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Status from '../stories/Status.stories'

describe('Status', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Status.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
