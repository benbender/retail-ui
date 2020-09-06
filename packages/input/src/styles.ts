// class="
export const InputStyles = {
  base: `
  block w-full text-sm leading-5 text-black focus:outline-none dark:text-gray-300 form-input focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray`,

  disabled: `bg-gray-300 opacity-50 cursor-not-allowed dark:bg-gray-800`,
  invalid: `border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red`,

  /* Wrapper input if have left or right element */
  wrapper: `flex relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400`,

  addon: {
    left: {
      base: `absolute inset-y-0`,
      element: {
        icon: `flex items-center ml-3 pointer-events-none`,
        button: `absolute inset-y-0 px-4 text-sm rounded-l-md`,
      },
    },
    right: {
      base: `absolute inset-y-0 right-0`,
      element: {
        icon: ` flex items-center mr-3 pointer-events-none`,
        button: `px-4 text-sm rounded-r-md`,
      },
    },
  },
}

//"
