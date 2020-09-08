import { createCtx } from '@retail-ui/hooks'

export type DialogValue = {
  onClose: () => void
  onSubmit?: () => void
}

export const [useDialogCtx, DialogProvider] = createCtx<DialogValue>()
