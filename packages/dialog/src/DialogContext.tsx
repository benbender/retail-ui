import { useCreateCtx } from '@retail-ui/hooks'

export type DialogValue = {
  onClose: () => void
  onSubmit: () => void
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useDialogCtx, DialogProvider] = useCreateCtx<DialogValue>()
