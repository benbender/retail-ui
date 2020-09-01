import { fireEvent, render } from '@retail-ui/test-utils'
import * as React from 'react'

import BadgeMeta, * as Badge from '../stories/Badge.stories'

describe('Badge', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Badge.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(BadgeMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
