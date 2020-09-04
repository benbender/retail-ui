import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Dialog from '../stories/Dialog.stories'

describe('Dialog', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Dialog.Simple isOpen={true} onClose={() => {}} onSubmit={() => {}} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
