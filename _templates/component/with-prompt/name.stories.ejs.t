---
to: packages/<%= name %>/stories/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import { <%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props } from '../src'

const meta: Meta<<%= h.changeCase.pascal(name) %>Props> = {
  title: 'Retail-UI/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  args: {},
}

export default meta

const Template: Story<<%= h.changeCase.pascal(name) %>Props> = (args) => (
  <<%= h.changeCase.pascal(name) %> {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
Simple.args = {}

