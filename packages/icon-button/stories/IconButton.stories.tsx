import * as React from 'react'

import { IconButton, IconButtonProps } from '../src'

const meta = {
  title: 'Retail-UI/IconButton',
  component: IconButton,
}

export default meta

const Template = (args: IconButtonProps) => (
  <IconButton {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'IconButton',
  onClick: () => console.log('IconButton onClick'),
}
