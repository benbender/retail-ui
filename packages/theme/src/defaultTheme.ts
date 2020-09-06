import { ActionButtonsStyles } from './styles/ActionButtonsStyles'
import { AlertStyles } from './styles/AlertStyles'
import { AvatarStyles } from './styles/AvatarStyles'
import { BreadcrumbStyles } from './styles/BreadcrumbStyles'
import { ButtonIconStyles } from './styles/ButtonIconStyles'
import { ButtonStyles } from './styles/ButtonStyles'
import { CardStyles } from './styles/CardStyles'
import { CollapseStyles } from './styles/CollapseStyles'
import { DialogStyles } from './styles/DialogStyles'
import { DrawerStyles } from './styles/DrawerStyles'
import { IconStyles } from './styles/IconStyles'
import { ImageStyles } from './styles/ImageStyles'
import { SpinnerStyles } from './styles/SpinnerStyles'
import { StatusStyles } from './styles/StatusStyles'

export const defaultTheme = {
  ButtonStyles,
  IconStyles,
  SpinnerStyles,
  ActionButtonsStyles,
  AlertStyles,
  ButtonIconStyles,
  AvatarStyles,
  BreadcrumbStyles,
  CardStyles,
  CollapseStyles,
  DialogStyles,
  DrawerStyles,
  ImageStyles,
  StatusStyles,
}

export type Theme = typeof defaultTheme
