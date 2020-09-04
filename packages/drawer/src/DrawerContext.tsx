import { useCreateCtx } from '@retail-ui/hooks'

export type DrawerValue = {
  onClose?: () => void
  onSubmit?: () => void
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useDrawerCtx, DrawerProvider] = useCreateCtx<DrawerValue>()
