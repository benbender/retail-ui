import * as React from 'react'

import { Image, ImageProps } from '../src'

const meta = {
  title: 'Retail-UI/Image',
  component: Image,
}

export default meta
const src =
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'

const Template = (args: ImageProps) => (
  <Image
    {...args}
    data-testid={meta.title}
    src={src}
    alt="Woman paying for a purchase"
    height="300px"
  />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
