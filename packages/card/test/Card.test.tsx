import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Card from '../stories/Card.stories'

describe('Card', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Card.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
