import { Card, CardBody } from '@retail-ui/card'
import { ChevronDownOutline } from '@retail-ui/heroicons'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useCollapseCtx } from './CollapseContext'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>
type Ref = HTMLDivElement

type ButtonProps = {
  onClick: () => void
  isCollapsed: boolean
}

interface CollapsePanelProps {
  index?: string
  buttonNode?: (buttonProps: ButtonProps) => React.ReactNode
  title: string
}

// TODO: transition
/* Single Panel as Item, Button, Content Icon */
export const CollapsePanel = React.forwardRef<
  Ref,
  ReactDivProps & CollapsePanelProps
>((props) => {
  const { children, className, buttonNode, title, index, ...rest } = props

  const {
    theme: { CollapseStyles },
  } = useThemeCtx()

  const { collapses, setCollapses } = useCollapseCtx()

  const isCollapsed = React.useMemo(() => {
    return index ? collapses[Number(index)] : false
  }, [collapses, index])

  const togglePanel = React.useCallback(() => {
    setCollapses(
      collapses.map((item, idx) => {
        if (`${idx}` === index) {
          return !item
        }
        return item
      }),
    )
  }, [collapses, index])

  const collapsePanelCls = clsx(className, CollapseStyles.panel)

  let buttonRender
  if (buttonNode) {
    buttonRender = buttonNode({ onClick: togglePanel, isCollapsed })
  } else {
    const btnCls = CollapseStyles.button
    const iconCls = clsx(CollapseStyles.icon, isCollapsed && 'rotate-180')
    buttonRender = (
      <div
        className={btnCls}
        role="button"
        tabIndex={0}
        aria-controls="CollapsePanel"
        aria-expanded="false"
        onClick={togglePanel}
        onKeyPress={togglePanel}
        {...rest}
      >
        {title}
        <ChevronDownOutline className={iconCls} />
      </div>
    )
  }

  let cardRender = null
  if (isCollapsed) {
    cardRender = cardRender = (
      <Card isStatic>
        <CardBody>{children}</CardBody>
      </Card>
    )
  }

  return (
    <div className={collapsePanelCls}>
      {buttonRender}
      {cardRender}
    </div>
  )
})

CollapsePanel.displayName = 'CollapsePanel'
