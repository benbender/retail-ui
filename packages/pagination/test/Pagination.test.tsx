import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Pagination from '../stories/Pagination.stories'

describe('Pagination', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Pagination.Simple
        onChange={() => {}}
        totalResults={30}
        resultsPerPage={5}
        label="label"
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
