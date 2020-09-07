import { useCreateCtx } from '@retail-ui/hooks'

import { CardStyles } from './styles'

export type CardColor = keyof typeof CardStyles['color']

export type CardValue = {
  color: CardColor
  isLoading: boolean
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useCardCtx, CardProvider] = useCreateCtx<CardValue>()
