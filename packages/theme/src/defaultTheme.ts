import { ActionButtonsStyles } from './styles/ActionButtonsStyles'
import { AlertStyles } from './styles/AlertStyles'
import { AvatarStyles } from './styles/AvatarStyles'
import { BadgeStyles } from './styles/BadgeStyles'
import { BreadcrumbStyles } from './styles/BreadcrumbStyles'
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
  BadgeStyles,
  BreadcrumbStyles,
}

export type Theme = typeof defaultTheme
