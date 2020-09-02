import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Breadcrumb from '../stories/BreadcrumbItem.stories'

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Breadcrumb.Simple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
