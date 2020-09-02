import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as ActionButtons from '../stories/ActionButtons.stories'

describe('ActionButtons', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<ActionButtons.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
