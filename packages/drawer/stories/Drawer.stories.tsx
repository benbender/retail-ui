import { Button } from '@retail-ui/button'
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

const Template = (args: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>Open drawer</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {}}
        size="base"
        data-testid={meta.title}
      >
        <DrawerHeader>Basic: Drawer Title</DrawerHeader>
        <DrawerBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eius fugiat illum repudiandae commodi inventore magnam unde vero
          cupiditate molestiae?
        </DrawerBody>
        <DrawerFooter />
      </Drawer>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
