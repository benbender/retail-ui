import { Spinner } from '@retail-ui/spinner'
import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useCardCtx } from './CardContext'

interface CardBodyProps {
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = (props) => {
  const { children, className } = props

  const { color, isLoading } = useCardCtx()

  const {
    theme: { CardStyles },
  } = useThemeCtx()

  const headerStyle = CardStyles.body
  const cls = clsx(
    className,
    headerStyle.base,
    isLoading && headerStyle.loading.base,
    isLoading && headerStyle.loading[color],
  )

  let bodyRender
  if (!isLoading) {
    bodyRender = children
  } else {
    bodyRender = <Spinner />
  }

  return <div className={cls}>{bodyRender}</div>
}
