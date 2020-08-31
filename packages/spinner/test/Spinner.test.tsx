import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Spinner from '../stories/Spinner.stories'

describe('Spinner', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Spinner.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
