import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import { Alert, AlertProps } from '../src'

const meta: Meta<AlertProps> = {
  title: 'Retail-UI/Alert',
  component: Alert,
  args: {
    content: `A alert that informs you of stuff`,
  },
}

export default meta

const Template: Story<AlertProps> = (args) => (
  <Alert {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
Simple.args = {}

export const HasClose = Template.bind({})
HasClose.args = {
  hasClose: true,
  onClose: () => {
    alert('onClose')
  },
}
