import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import ActionButtonsMeta, * as ActionButtons from '../stories/ActionButtons.stories'

describe('ActionButtons', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<ActionButtons.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(ActionButtonsMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
