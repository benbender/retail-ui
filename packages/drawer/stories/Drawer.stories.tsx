import { Button } from '@retail-ui/button'
import { Input } from '@retail-ui/input'
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
  const [isNewBoard, setIsNewBoard] = React.useState(false)

  const buttonHere = () => {
    if (isNewBoard) {
      return null
    }
    return (
      <button
        onClick={() => {
          setIsNewBoard(true)
        }}
        className={`flex items-center px-5 py-3 hover:bg-purple-300 focus:outline-none`}
      >
        Click
      </button>
    )
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>Open drawer</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          console.log(`🇻🇳 [LOG]: Template -> onClose`)
          setIsOpen(false)
        }}
        onSubmit={() => {}}
        size="base"
        data-testid={meta.title}
      >
        <DrawerHeader>
          <span>Basic: Drawer Title</span>
        </DrawerHeader>

        <DrawerBody>
          {buttonHere()}
          {!isNewBoard && <span>`Bewboard outside`</span>}
          {!isNewBoard && (
            <React.Fragment>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`text-purple-600 h-7 w-7`}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={`ml-3`}>New board</span>
            </React.Fragment>
          )}
          {isNewBoard && <Input placeholder="Enter board name" />}
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
