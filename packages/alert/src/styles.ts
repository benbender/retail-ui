export const AlertStyles = {
  base:
    'font-medium relative overflow-hidden border-2 border-solid rounded-md duration-150 ease-in flex items-center justify-start',
  hasClose: `pr-12`,
  btnClose: `absolute top-0 bottom-0 right-0 flex items-center justify-center px-1`,
  description: `text-sm font-normal`,
  size: {
    sm: 'py-1 pl-2 pr-2 text-sm',
    base: 'py-2 pl-4 pr-4 text-base',
    lg: 'py-5 pl-5 pr-5 text-lg',
  },
  variant: {
    default: {
      primary: `bg-purple-200 border-purple-200 text-purple-800`,
      secondary: `bg-gray-200 border-gray-200 text-gray-800`,
      success: `bg-green-200 border-green-200 text-green-800`,
      danger: `bg-red-200 border-red-200 text-red-700`,
      warning: `bg-yellow-200 border-yellow-200 text-yellow-800`,
      light: `bg-gray-200 border-gray-200 text-gray-900`,
      dark: `bg-gray-900 border-gray-900 text-white`,
    },
    outline: {
      primary: `border-current text-purple-700 bg-transparent`,
      secondary: `border-current text-gray-700 bg-transparent`,
      success: `border-current text-green-700 bg-transparent`,
      danger: `border-current text-red-700 bg-transparent`,
      warning: `border-current text-yellow-700 bg-transparent`,
      light: `border-current text-gray-200 bg-transparent`,
      dark: `border-current text-gray-900 bg-transparent`,
    },
    solid: {
      primary: `bg-purple-700 border-purple-700 text-white`,
      secondary: `bg-primary border-primary text-white`,
      success: `bg-green-700 border-green-700 text-white`,
      danger: `bg-red-700 border-red-700 text-white`,
      warning: `bg-yellow-600 border-yellow-600 text-white`,
      light: `bg-gray-200 border-gray-200  text-white`,
      dark: `bg-gray-900 border-gray-900 text-white`,
    },
  },
  bordered: {
    top: `border border-solid border-t-4 border-r-0 border-b-0 border-l-0 !border-current rounded-none`,
    left: `border border-solid border-l-4 border-r-0 border-b-0 border-t-0 !border-current rounded-none`,
    right: `border border-solid border-r-4 border-l-0 border-b-0 border-t-0 !border-current rounded-none`,
    bottom: `border border-solid border-b-4 border-l-0 border-r-0 border-t-0 !border-current rounded-none`,
  },
  statusIcon: `!h-5 !w-5 mr-3`,
  // '.alert a': {
  //   underline: {},
  // },
  // '.prose .alert p': {
  //   'mt-0 mb-0': {},
  // },
  // '.prose .alert a': {
  //   color: 'inherit',
  // },
}
