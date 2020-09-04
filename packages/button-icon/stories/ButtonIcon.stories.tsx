import { AcademicCapSolid } from '@retail-ui/heroicons'
import * as React from 'react'

import { ButtonIcon, ButtonIconProps } from '../src'

const meta = {
  title: 'Retail-UI/ButtonIcon',
  component: ButtonIcon,
}

export default meta

const Template = (args: ButtonIconProps) => (
  <ButtonIcon icon={<AcademicCapSolid />} {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
