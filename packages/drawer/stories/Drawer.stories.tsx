import * as React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
} from '../src'

const meta = {
  title: 'Retail-UI/Drawer',
  component: Drawer,
}

export default meta

const Template = (args: DrawerProps) => (
  <Drawer
    {...args}
    isOpen={false}
    onClose={() => {}}
    onSubmit={() => {}}
    size="sm"
    data-testid={meta.title}
  >
    <DrawerHeader>Basic: Drawer Title</DrawerHeader>
    <DrawerBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius
      fugiat illum repudiandae commodi inventore magnam unde vero cupiditate
      molestiae?
    </DrawerBody>
    <DrawerFooter />
  </Drawer>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
