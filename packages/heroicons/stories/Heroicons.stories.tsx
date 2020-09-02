import { IconProps } from '@retail-ui/icon'
import * as React from 'react'

import { AcademicCapOutline } from '../src'

const meta = {
  title: 'Retail-UI/Heroicon',
  component: AcademicCapOutline,
}

export default meta

const Template = (args: IconProps) => (
  <AcademicCapOutline {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Heroicons',
}
