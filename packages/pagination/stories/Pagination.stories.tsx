import * as React from 'react'

import { Pagination, PaginationProps } from '../src'

const meta = {
  title: 'Retail-UI/Pagination',
  component: Pagination,
}

export default meta

const Template = (args: PaginationProps) => (
  <Pagination
    {...args}
    data-testid={meta.title}
    onChange={() => {}}
    totalResults={30}
    resultsPerPage={5}
    label="label"
  />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
