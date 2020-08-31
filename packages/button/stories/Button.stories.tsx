import { action, actions } from '@storybook/addon-actions'
import * as React from 'react'

import { Button, ButtonProps } from '../src/Button'

const meta = {
  title: 'Retail-UI/Button',
  component: Button,
}

export default meta

const Template = (args: ButtonProps) => (
  <Button
    {...args}
    data-testid={meta.title}
    onClick={action('Click handler')}
    {...actions('onClick')}
  />
)

export const Basic = Template.bind({})
// @ts-ignore
Basic.args = {
  children: 'Button',
}
