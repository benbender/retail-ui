import { ActionButtons } from '@retail-ui/action-buttons'
import * as React from 'react'

import { Card, CardBody, CardFooter, CardHeader, CardProps } from '../src'

const meta = {
  title: 'Retail-UI/Card',
  component: Card,
}

export default meta

const Template = (args: CardProps) => (
  <Card {...args} data-testid={meta.title}>
    <CardBody>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </CardBody>
  </Card>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}

const TemplateFull = (args: CardProps) => (
  <Card {...args} data-testid={meta.title}>
    <CardHeader>Normal Card</CardHeader>
    <CardBody>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </CardBody>
    <CardFooter className="justify-end">
      <ActionButtons />
    </CardFooter>
  </Card>
)

export const Full = TemplateFull.bind({})
// @ts-ignore
Full.args = {}
