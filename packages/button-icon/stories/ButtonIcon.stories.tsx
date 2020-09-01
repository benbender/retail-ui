import * as React from 'react'

import { ButtonIcon, ButtonIconProps } from '../src'

const meta = {
  title: 'Retail-UI/ButtonIcon',
  component: ButtonIcon,
}

export default meta

const Template = (args: ButtonIconProps) => (
  <ButtonIcon {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'ButtonIcon',
}
