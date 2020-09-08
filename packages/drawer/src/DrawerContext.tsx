import { createCtx } from '@retail-ui/hooks'

export type DrawerValue = {
  onClose?: () => void
  onSubmit?: () => void
}

export const [useDrawerCtx, DrawerProvider] = createCtx<DrawerValue>()
