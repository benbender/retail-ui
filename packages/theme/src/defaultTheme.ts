import { ActionButtonsStyles } from './styles/ActionButtonsStyles'
import { ButtonStyles } from './styles/ButtonStyles'
import { IconStyles } from './styles/IconStyles'
import { SpinnerStyles } from './styles/SpinnerStyles'

export const defaultTheme = {
  ButtonStyles,
  IconStyles,
  SpinnerStyles,
  ActionButtonsStyles,
}

export type Theme = typeof defaultTheme
