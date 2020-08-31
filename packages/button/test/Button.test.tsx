import { render } from '@retail-ui/test-utils'
import { fireEvent } from '@testing-library/react'
import * as React from 'react'

import ButtonMeta, * as Button from '../stories/Button.stories'

describe('Button', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button.Basic {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(ButtonMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
