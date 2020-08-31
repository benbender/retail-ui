import * as React from 'react'

import { Icon, IconProps } from '../src'

const meta = {
  title: 'Retail-UI/Icon',
  component: Icon,
}

export default meta

const Template = (args: IconProps) => (
  <Icon viewBox="0 0 24 24" {...args} data-testid={meta.title}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </Icon>
)

export const Basic = Template.bind({})
// @ts-ignore
Basic.args = {
  size: 'base',
}
