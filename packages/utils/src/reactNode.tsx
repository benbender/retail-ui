import { isFunction } from 'lodash'
import * as React from 'react'

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props: any,
): React.ReactNode {
  if (!React.isValidElement(element)) return replacement

  return React.cloneElement(element, isFunction(props) ? props() : props)
}

export function cloneElement(
  element: React.ReactNode,
  props?: any,
): React.ReactElement {
  return replaceElement(element, element, props) as React.ReactElement
}
