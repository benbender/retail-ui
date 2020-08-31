import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import SpinnerMeta, * as Spinner from '../stories/Spinner.stories'

describe('Spinner', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Spinner.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(SpinnerMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
