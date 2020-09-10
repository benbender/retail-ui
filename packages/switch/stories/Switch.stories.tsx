import * as React from 'react'

import { Switch, SwitchProps } from '../src'

const meta = {
  title: 'Retail-UI/Switch',
  component: Switch,
}

export default meta

const Template = (args: SwitchProps) => (
  <Switch {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
