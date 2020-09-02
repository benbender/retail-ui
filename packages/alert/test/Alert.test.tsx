import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as Alert from '../stories/Alert.stories'

describe('Alert', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Alert.Simple title="Test title" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
