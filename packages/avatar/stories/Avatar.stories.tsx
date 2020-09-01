import * as React from 'react'

import { Avatar, AvatarProps } from '../src'

const meta = {
  title: 'Retail-UI/Avatar',
  component: Avatar,
}

export default meta

const Template = (args: AvatarProps) => (
  <Avatar {...args} data-testid={meta.title} />
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  src: `https://pbs.twimg.com/profile_images/1285102166709919744/XvlWrJny_400x400.jpg`,
}
