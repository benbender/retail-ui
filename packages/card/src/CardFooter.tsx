import { useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

import { useCardCtx } from './CardContext'

interface CardFooterProps {
  className?: string
  isTransparent?: boolean
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  const { children, className, isTransparent } = props

  const {
    theme: { CardStyles },
  } = useThemeCtx()

  const { color, isLoading } = useCardCtx()

  const footerStyle = CardStyles.footer
  const cls = clsx(
    className,
    footerStyle.base,
    isTransparent && footerStyle.transparent,
    footerStyle.color[color],
    isLoading && footerStyle.loading,
  )

  return <div className={cls}>{children}</div>
}
