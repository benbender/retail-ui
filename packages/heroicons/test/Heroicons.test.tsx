import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Heroicons from '../stories/Heroicons.stories'

describe('Heroicons', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Heroicons.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
