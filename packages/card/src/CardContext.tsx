import { useCreateCtx } from '@retail-ui/hooks'

import { CardColor } from '.'

export type CardValue = {
  color: CardColor
  isLoading: boolean
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useCardCtx, CardProvider] = useCreateCtx<CardValue>()
