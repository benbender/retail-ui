import { useCreateCtx } from '@retail-ui/hooks'

export type DropdownValue = {
  isOpen: boolean
  toggleOpen: (isOpen?: boolean) => void
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useDropdownCtx, DropdownProvider] = useCreateCtx<DropdownValue>()
