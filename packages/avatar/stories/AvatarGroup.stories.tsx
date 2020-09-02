import * as React from 'react'

import { Avatar, AvatarGroup, AvatarProps } from '../src'

const meta = {
  title: 'Retail-UI/AvatarGroup',
  component: AvatarGroup,
}

export default meta

const src = `https://pbs.twimg.com/profile_images/1285102166709919744/XvlWrJny_400x400.jpg`

const Group = (args: AvatarProps) => (
  <AvatarGroup data-testid={meta.title}>
    <Avatar src={src} {...args} />
    <Avatar title="PJ" size="base" {...args} />
    {/* <Avatar icon={UserSolid} {...args} /> */}
  </AvatarGroup>
)

export const Simple = Group.bind({})
// @ts-ignore
Simple.args = {}
