# Retail UI 🛒 (Power by Tailwindcss)

A collection of accessible and reusable components for React to rapid development of gorgeous interfaces with Tailwind CSS - utility-first CSS framework.

> I'm learning setup my own the modern project of development with `monorepo` `yarn workspace`, `convention commit` `continuous integration`, `multiple braches`, `testing library` publish to `npmjs.org` and many more ...

---

## Why another UI library

The awesome feelings when developing a `React` application with `Tailwindcss` can be leveraged to another level if we have a more primitive component used in web development.

I'm lazy people, I'm wanna keep writting my Tailwindcss and React together without having to integrate other UI component, so I'm created this UI for people like me because it hard to use another UI library if we do'nt take out the fully documentation.

## Feature

With ability to easily build complex and customizable UI of tailwindcss. Retail UI built upon the following principles:

- Dark theme compatible.
- Highly customizable via `tailwindcss`.
- Provide accessible out-of-the-box (Designed to listen to the real screen reader)
- Easier to learn and access. Check our Storybook
- `Typescript` by default for safety world

---

## Installing

Yarn

```sh
yarn add tailwindcss @retail-ui/core
```

Npm

```sh
npm i tailwindcss @retail-ui/core
```

---

## Usage

**Simple tailwindcss setup**

`tailwind.config.js`

```javascript
const defaultTheme = require("tailwindcss/defaultTheme")
// Our default theme
const { resolveConfig } = require("@retail-ui/core")

module.exports = resolveConfig({
  purge: ["src/**/*.{js,jsx,ts,tsx}"], # your purge files
  // experimental: "all", # experimental tailwindcss
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], # custom Font
      },
    },
  },
  variants: {},
  plugins: [],
})
```

`postcss.config.js`

```javascript
module.exports = {
  plugins: [
    'tailwindcss',
    ... # your postcss plugin
  ],
}
```

`tailwind.css`

```css
@import url('https://rsms.me/inter/inter.css'); /* Put your font */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Wrapping our `Provider`**

Here is a sample of `Next.js` setup

Your `_app.tsx` root file

```tsx
import { ThemeProvider, defaultTheme } from '@retail-ui/core'
import { OtherProvider } from 'other-packages'

const AppProvider: React.FC = (props) => {
  const { children } = props
  return (
    <OtherProvider>
      <RetailProvider>{children}</RetailProvider>
    </OtherProvider>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
```

**Ready to use**

```tsx
import { Button } from '@retail-ui/core'

const AwesomeComponent: React.FC = (props) => {
  return (
    <div className="flex items-center justify-center">
      <Button variant="light" >Awesome Retail UI</Button>
    </div>
  )
}

---

## Check list [WIP]

[TODO](TODO.md)
```
