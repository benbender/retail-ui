import { ActionButtonsStyles } from './styles/ActionButtonsStyles'
import { AlertStyles } from './styles/AlertStyles'
import { AvatarStyles } from './styles/AvatarStyles'
import { ButtonIconStyles } from './styles/ButtonIconStyles'
import { ButtonStyles } from './styles/ButtonStyles'
import { IconStyles } from './styles/IconStyles'
import { SpinnerStyles } from './styles/SpinnerStyles'

export const defaultTheme = {
  ButtonStyles,
  IconStyles,
  SpinnerStyles,
  ActionButtonsStyles,
  AlertStyles,
  ButtonIconStyles,
  AvatarStyles,
}

export type Theme = typeof defaultTheme
