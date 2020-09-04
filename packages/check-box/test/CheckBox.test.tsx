import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as CheckBox from '../stories/CheckBox.stories'

describe('CheckBox', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<CheckBox.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
