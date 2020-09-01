export const BreadcrumbStyles = {
  base: `flex flex-wrap py-1 px-3 list-none rounded relative whitespace-no-wrap mt-0 mb-0`,
  // class="
  item: {
    base: `text-gray-600 flex items-center mt-0 mb-0 `,
    active: `text-gray-900 no-underline`,
    size: {
      // size
      sm: `text-xs`,
      base: `text-base`,
      lg: `text-xl`,
    },
    icon: {
      base: `mr-1`,
      size: {
        sm: `!h-3 !w-3`,
        base: `!h-4 !w-4`,
        lg: `!h-5 !w-5`,
      },
    },
  },
  separator: {
    base: `inline-block px-3 text-gray-600 last:hidden`,
  },
}
