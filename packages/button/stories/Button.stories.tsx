import * as React from 'react'

import { Button, ButtonProps } from '../src/Button'

const meta = {
  title: 'Retail-UI/Button',
  component: Button,
}

export default meta

const Template = (args: ButtonProps) => (
  <Button {...args} data-testid={meta.title} />
)

export const Basic = Template.bind({})
// @ts-ignore
Basic.args = {
  children: 'Button',
}

export const Block = Template.bind({})
// @ts-ignore
Block.args = {
  children: 'Button',
  isBlock: true,
}

export const Disabled = Template.bind({})
// @ts-ignore
Disabled.args = {
  children: 'Button',
  isDisabled: true,
}
