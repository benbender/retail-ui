import * as React from 'react'

import { Status, StatusProps } from '../src'

const meta = {
  title: 'Retail-UI/Status',
  component: Status,
}

export default meta

const Template = (args: StatusProps) => (
  <Status {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Status',
}
