import { useCreateCtx } from '@retail-ui/hooks'

import { Theme } from './defaultTheme'

export type ThemeValue = {
  theme: Theme
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const [useThemeCtx, ThemeProvider] = useCreateCtx<ThemeValue>()
