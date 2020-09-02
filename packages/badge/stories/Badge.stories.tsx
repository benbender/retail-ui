import * as React from 'react'

import { Badge, BadgeProps } from '../src'

const meta = {
  title: 'Retail-UI/Badge',
  component: Badge,
}

export default meta

const Template = (args: BadgeProps) => (
  <Badge {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Badge',
}
