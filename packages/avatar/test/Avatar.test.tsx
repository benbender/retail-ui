import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Avatar from '../stories/Avatar.stories'

describe('Avatar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Avatar.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
