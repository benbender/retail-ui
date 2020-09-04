import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Drawer from '../stories/Drawer.stories'

describe('Drawer', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Drawer.Simple isOpen={false} onClose={() => {}} onSubmit={() => {}} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
