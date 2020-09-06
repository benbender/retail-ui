// class="
export const DropdownStyles = {
  base: `relative inline-block`,
  list: {
    base: `flex p-2 flex-col space-y-2 mt-2 absolute z-10 w-56 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700`,
    align: {
      left: `left-0`,
      right: `right-0`,
    },
    size: {
      sm: `w-40`,
      base: `w-56`,
      lg: `w-64`,
    },
  },
  item: {
    // class="
    base: `inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-200 whitespace-no-wrap no-underline hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus:shadow-outline focus:outline-none focus:bg-gray-200 cursor-pointer`,
    size: {
      base: `text-xs`,
      sm: `text-md`,
      lg: `text-lg`,
    },
  },
  header: {
    base: `py-2 text-gray-600 text-xs w-full uppercase tracking-wider font-bold leading-none`,
    size: {
      sm: `px-0`,
      base: `px-2`,
      lg: `px-3`,
    },
  },
  divide: `border-t border-gray-300 border-solid -ml-2 -mr-2 my-2`,
  // icons
  buttonIcon: `h-4 w-4 text-gray-600`,
  arrow: `text-current h-4 w-4 inline align-middle transition ease-out duration-200 transform ml-1 -mr-1 flex-none`,
  mix: {
    '.dropdown-arrow': {
      marginTop: '-3px',
      '@apply ': {},
    },
    '.btn-sm .dropdown-arrow': {
      '@apply ml-0': {},
    },
    '.btn-lg .dropdown-arrow': {
      '@apply h-6 w-6 !important': {},
    },
  },
}
