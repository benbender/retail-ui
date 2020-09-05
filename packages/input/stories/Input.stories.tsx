import { AcademicCapSolid } from '@retail-ui/heroicons'
import * as React from 'react'

import { Input, InputAddon, InputGroup, InputProps } from '../src'

const meta = {
  title: 'Retail-UI/Input',
  component: Input,
}

export default meta

const Template = (args: InputProps) => (
  <InputGroup>
    <InputAddon position="left">
      <AcademicCapSolid />
    </InputAddon>
    <Input
      {...args}
      data-testid={meta.title}
      placeholder="Search for projects"
      aria-label="Search"
      hasLeft
      hasRight
    />
    <InputAddon position="right">
      <AcademicCapSolid />
    </InputAddon>
  </InputGroup>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
