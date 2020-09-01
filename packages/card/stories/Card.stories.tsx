import * as React from 'react'

import { Card, CardProps } from '../src'

const meta = {
  title: 'Retail-UI/Card',
  component: Card,
}

export default meta

const Template = (args: CardProps) => (
  <Card {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Card',
}
