import { createCtx } from '@retail-ui/hooks'

import { CardStyles } from './styles'

export type CardColor = keyof typeof CardStyles['color']

export type CardValue = {
  color: CardColor
  isLoading: boolean
}

export const [useCardCtx, CardProvider] = createCtx<CardValue>()
