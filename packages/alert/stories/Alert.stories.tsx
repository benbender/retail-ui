import * as React from 'react'

import { Alert, AlertProps } from '../src'

const meta = {
  title: 'Retail-UI/Alert',
  component: Alert,
}

export default meta

const Template = (args: AlertProps) => (
  <Alert {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'A alert that informs you of stuff',
}
