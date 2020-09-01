import { fireEvent, render } from '@retail-ui/test-utils'
import * as React from 'react'

import CardMeta, * as Card from '../stories/Card.stories'

describe('Card', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Card.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(CardMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
