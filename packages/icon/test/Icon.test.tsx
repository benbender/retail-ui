import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import IconMeta, * as Icon from '../stories/Icon.stories'

describe('Icon', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Icon.Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
