import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Input from '../stories/Input.stories'

describe('Input', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Input.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
