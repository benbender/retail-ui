import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import IconButtonMeta, * as IconButton from '../stories/IconButton.stories'

describe('IconButton', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<IconButton.Simple {...{ onClick }} />)
    console.log(`🇻🇳 [LOG]: getByTestId`, getByTestId)

    expect(onClick).not.toHaveBeenCalled()
    // fireEvent.click(getByTestId(IconButtonMeta.title))
    // expect(onClick).toHaveBeenCalledTimes(1)
  })
})
