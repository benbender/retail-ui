import { AcademicCapSolid } from '@retail-ui/heroicons'
import { fireEvent, render } from '@retail-ui/test-utils'
import * as React from 'react'

import ButtonIconMeta, * as ButtonIcon from '../stories/ButtonIcon.stories'

describe('ButtonIcon', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <ButtonIcon.Simple icon={AcademicCapSolid} {...{ onClick }} />,
    )

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(ButtonIconMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
