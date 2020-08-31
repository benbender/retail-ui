---
to: packages/<%= name %>/stories/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import * as React from 'react';
import { <%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props } from '../src/<%= h.changeCase.pascal(name) %>';

const meta = {
  title: 'Retail-UI/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
};

export default meta;

const Template = (args: <%= h.changeCase.pascal(name) %>Props) => (
  <<%= h.changeCase.pascal(name) %> {...args} data-testid={meta.title} />
);

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  children: '<%= h.changeCase.pascal(name) %>',
};
