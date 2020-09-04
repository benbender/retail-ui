import { useCreateCtx } from '@retail-ui/hooks'
import { Theme } from '@retail-ui/theme'

export type CardColor = keyof Theme['CardStyles']['color']

export type CardValue = {
  color: CardColor
  isLoading: boolean
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useCardCtx, CardProvider] = useCreateCtx<CardValue>()
