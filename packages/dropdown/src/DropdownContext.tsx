import { createCtx } from '@retail-ui/hooks'

export type DropdownValue = {
  isOpen: boolean
  toggleOpen: (isOpen?: boolean) => void
}

export const [useDropdownCtx, DropdownProvider] = createCtx<DropdownValue>()
