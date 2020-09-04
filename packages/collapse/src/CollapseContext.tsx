import { useCreateCtx } from '@retail-ui/hooks'

export type CollapseValue = {
  collapses: boolean[]
  setCollapses: (collapses: boolean[]) => void
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useCollapseCtx, CollapseProvider] = useCreateCtx<CollapseValue>()
