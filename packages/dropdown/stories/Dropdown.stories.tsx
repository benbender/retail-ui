import { Button } from '@retail-ui/button'
import { ChevronDownOutline } from '@retail-ui/heroicons'
import * as React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownProps,
} from '../src'

const meta = {
  title: 'Retail-UI/Dropdown',
  component: Dropdown,
}

export default meta

const Template = (args: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dropdown
      {...args}
      data-testid={meta.title}
      isOpen={isOpen}
      onChangeOpen={(state) => setIsOpen(state)}
    >
      <Button onClick={() => setIsOpen((state) => !state)}>
        Control dropdown
      </Button>
      <DropdownButton
        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
        aria-label="Notifications"
        aria-haspopup="true"
        onClick={() => {
          console.log('something')
        }}
      >
        {!isOpen && <ChevronDownOutline />}
        {isOpen && `Up`}
      </DropdownButton>
      <DropdownList>
        <DropdownItem className="justify-between">
          <span>Messages</span>
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
            13
          </span>
        </DropdownItem>
        <DropdownItem className="justify-between">
          <span>Sales</span>
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
            2
          </span>
        </DropdownItem>
        <DropdownItem className="justify-between">
          <span>Alerts</span>
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  )
}

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {
  children: 'Dropdown',
}
