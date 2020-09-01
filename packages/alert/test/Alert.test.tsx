import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import AlertMeta, * as Alert from '../stories/Alert.stories'

describe('Alert', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Alert.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(AlertMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
