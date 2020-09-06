import * as React from 'react'

import { Radio, RadioProps } from '../src'

const meta = {
  title: 'Retail-UI/Radio',
  component: Radio,
}

export default meta

const Template = (args: RadioProps) => (
  <Radio {...args} data-testid={meta.title} value="busines" />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Radio',
}
