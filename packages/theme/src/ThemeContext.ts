import { createCtx } from '@retail-ui/ultis'

import { Theme } from './defaultTheme'

export type ThemeValue = {
  theme: Theme
}

export const [useThemeCtx, ThemeProvider] = createCtx<ThemeValue>()
