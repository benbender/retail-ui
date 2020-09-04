import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Table from '../stories/Table.stories'

describe('Table', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Table.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
