import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Dropdown from '../stories/Dropdown.stories'

describe('Dropdown', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Dropdown.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
