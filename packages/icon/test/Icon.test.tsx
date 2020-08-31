import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Icon from '../stories/Icon.stories'

describe('Icon', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Icon.Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
