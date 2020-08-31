import * as React from 'react'

import { Spinner, SpinnerProps } from '../src/Spinner'

const meta = {
  title: 'Retail-UI/Spinner',
  component: Spinner,
}

export default meta

const Template = (args: SpinnerProps) => (
  <Spinner {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
