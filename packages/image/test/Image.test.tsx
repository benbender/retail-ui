import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Image from '../stories/Image.stories'

describe('Image', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Image.Simple src={Image.src} alt="Woman paying for a purchase" />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
