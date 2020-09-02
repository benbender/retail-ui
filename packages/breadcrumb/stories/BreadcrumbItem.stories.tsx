import * as React from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '../src'

const meta = {
  title: 'Retail-UI/BreadcrumbItem',
  component: BreadcrumbItem,
}

export default meta

const Template = (args: BreadcrumbProps) => (
  <Breadcrumb data-testid={meta.title}>
    <BreadcrumbItem {...args}>
      <a href="#">Dashboard</a>
    </BreadcrumbItem>
    <BreadcrumbItem {...args}>
      <a href="#">Project</a>
    </BreadcrumbItem>
    <BreadcrumbItem isActive {...args}>
      Export
    </BreadcrumbItem>
  </Breadcrumb>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Breadcrumb',
}
