import { fireEvent, render } from '@retail-ui/test-utils'
import * as React from 'react'

import BreadcrumbMeta, * as Breadcrumb from '../stories/BreadcrumbItem.stories'

describe('Breadcrumb', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Breadcrumb.Simple {...{ onClick }} />)

    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(getByTestId(BreadcrumbMeta.title))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
