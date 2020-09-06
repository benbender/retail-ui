import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Radio from '../stories/Radio.stories'

describe('Radio', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Radio.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
