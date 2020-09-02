import { ButtonIcon, ButtonIconVariant } from '@retail-ui/button-icon'
import {
  BanOutline,
  CheckOutline,
  ExclamationCircleOutline,
  ExclamationOutline,
  XSolid,
} from '@retail-ui/heroicons'
import { Theme, useThemeCtx } from '@retail-ui/theme'
import clsx from 'clsx'
import * as React from 'react'

const ALERT_STATUS_ICON = {
  primary: ExclamationCircleOutline,
  success: CheckOutline,
  danger: BanOutline,
  warning: ExclamationOutline,
}

type AlertVariant = keyof Theme['AlertStyles']['variant']
type AlertColor = keyof Theme['AlertStyles']['variant']['default']
type AlertSize = keyof Theme['AlertStyles']['size']
type AlertBordered = keyof Theme['AlertStyles']['bordered']
type AlertStatusIcon = keyof typeof ALERT_STATUS_ICON

export type AlertProps = React.PropsWithChildren<{
  title: string | React.ReactNode
  variant?: AlertVariant
  color?: AlertColor
  statusIcon?: AlertStatusIcon
  size?: AlertSize
  bordered?: AlertBordered
  hasClose?: boolean
  onClose?: () => void
}>

type Ref = HTMLDivElement

export const Alert = React.forwardRef<Ref, AlertProps>((props, ref) => {
  const {
    title,
    children,
    variant = 'default',
    color = 'primary',
    size = 'base',
    bordered,
    hasClose = false,
    statusIcon,
    onClose,
  } = props

  const {
    theme: { AlertStyles },
  } = useThemeCtx()
  const variantCls = AlertStyles.variant

  const colorCls = variantCls[variant]
  const sizeCls = AlertStyles.size
  const borderedCls = AlertStyles.bordered

  const cls = clsx(
    AlertStyles.base,
    colorCls[color],
    sizeCls[size],
    bordered && borderedCls[bordered],
    hasClose && AlertStyles.hasClose,
  )

  const btnCls = clsx(AlertStyles.btnClose)
  const btnVariant: Record<AlertVariant, ButtonIconVariant> = {
    default: 'light',
    outline: 'outline',
    solid: 'default',
  }

  const StatusIcon = statusIcon ? ALERT_STATUS_ICON[statusIcon] : null
  const statusIconCls = clsx(AlertStyles.statusIcon)

  const descriptionCls = clsx(AlertStyles.description)

  return (
    <div ref={ref} className={cls} role="alert">
      {StatusIcon && (
        <StatusIcon
          className={statusIconCls}
          // style={{
          //   maxWidth: '1.25rem',
          //   minWidth: '1.25rem',
          //   maxHeight: '1.25rem',
          //   minHeight: '1.25rem',
          // }}
        />
      )}
      {!children && title}
      {children && (
        <div>
          <span>{title}</span>
          <p className={descriptionCls}>{children}</p>
        </div>
      )}
      {hasClose && (
        <div className={btnCls}>
          <ButtonIcon
            color={color}
            size="base"
            shape="rounded"
            icon={XSolid}
            variant={btnVariant[variant]}
            onClick={onClose}
          />
        </div>
      )}
    </div>
  )
})

Alert.displayName = 'Alert'
