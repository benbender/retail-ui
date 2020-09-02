import * as React from 'react'

import { ActionButtons, ActionButtonsProps } from '../src'

const meta = {
  title: 'Retail-UI/ActionButtons',
  component: ActionButtons,
}

export default meta

const Template = (args: ActionButtonsProps) => (
  <ActionButtons {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
