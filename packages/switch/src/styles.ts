export const SwitchStyles = {
  base: `relative inline-block align-middle cursor-pointer select-none bg-transparent focus-within:shadow-outline`,
  track: {
    base: `w-12 h-6 bg-purple-600 dark:bg-gray-600 rounded-full shadow-inner`,
    checked: `transform transition-colors bg-green-500`,
    disabled: `bg-purple-500`,
  },

  thumb: {
    base: `transition-all duration-300 ease-in-out absolute top-0 left-0 w-6 h-6 bg-white border-2 border-purple-600 rounded-full shadow`,
    checked: `transform translate-x-full border-green-500`,
    disabled: `bg-purple-100 border-purple-500`,
  },
}
