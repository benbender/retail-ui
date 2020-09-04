import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Collapse from '../stories/Collapse.stories'

describe('Collapse', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Collapse.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
