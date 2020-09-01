import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import AvatarMeta, * as Avatar from '../stories/Avatar.stories'

describe('Avatar', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Avatar.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(AvatarMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
