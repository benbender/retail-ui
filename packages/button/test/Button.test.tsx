import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Button from '../stories/Button.stories'

describe('Button', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Button.Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
