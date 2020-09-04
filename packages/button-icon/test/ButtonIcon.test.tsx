import { AcademicCapSolid } from '@retail-ui/heroicons'
import { render } from '@retail-ui/test-utils'
import * as React from 'react'

import * as ButtonIcon from '../stories/ButtonIcon.stories'

describe('ButtonIcon', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ButtonIcon.Simple icon={<AcademicCapSolid />} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
