import { createCtx } from '@retail-ui/hooks'

export type CollapseValue = {
  collapses: boolean[]
  setCollapses: (collapses: boolean[]) => void
}

export const [useCollapseCtx, CollapseProvider] = createCtx<CollapseValue>()
