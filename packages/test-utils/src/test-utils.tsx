import { defaultTheme, ThemeProvider } from '@retail-ui/theme'
import {
  render as RtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import * as React from 'react'

type UI = Parameters<typeof RtlRender>[0]

// UI-less passthrough fallback to prevent using conditional logic in render
function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children
}

export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * optional additional wrapper, e.g. Context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyConponent />, {
   *  wrapper: MyContext
   * });
   *
   * // multiple wrapper
   * render(<MyConponent />, {
   *  wrapper: ({ children }) => (
   *    <ContextA>
   *      <ContextB>
   *        {children}
   *      <ContextB />
   *    <ContextA />
   *  )
   * });
   *
   * ```
   */
  wrapper?: typeof ChildrenPassthrough
}

/**
 * Custom render for @testing-library/react
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param component the component under test
 * @param options customized test options
 */
export const render = (
  ui: UI,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {},
): RenderResult => {
  return RtlRender(
    <ThemeProvider value={{ theme: defaultTheme }}>
      <Wrapper>{ui}</Wrapper>
    </ThemeProvider>,
    options,
  )
}

export { fireEvent } from '@testing-library/react'
