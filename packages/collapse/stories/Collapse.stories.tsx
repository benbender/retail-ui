import { Button } from '@retail-ui/button'
import * as React from 'react'

import { Collapse, CollapsePanel, CollapseProps } from '../src'

const meta = {
  title: 'Retail-UI/Collapse',
  component: Collapse,
}

export default meta

const Template = (args: CollapseProps) => (
  <Collapse {...args} data-testid={meta.title}>
    <CollapsePanel
      title="Open Collapse"
      buttonNode={({ onClick, isCollapsed }) => (
        <Button onClick={onClick}>
          {isCollapsed ? `Open collapse` : `Close collapse`}
        </Button>
      )}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
      officia, atque iste ut excepturi minus? Tempora unde culpa odit
      dignissimos
    </CollapsePanel>
    <CollapsePanel title="Open Collapse">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
      officia, atque iste ut excepturi minus? Tempora unde culpa odit
      dignissimos
    </CollapsePanel>
    <CollapsePanel title="Open Collapse">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
      officia, atque iste ut excepturi minus? Tempora unde culpa odit
      dignissimos
    </CollapsePanel>
  </Collapse>
)

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
