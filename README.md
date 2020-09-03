# Retail UI

The collection of react component power by tailwindcss

## Check list [WIP]

[TODO](TODO.md)

## Installing

`yarn add tailwindcss @retail-ui/core`

`npm i tailwindcss @retail-ui/core`

## Usage

### Simple tailwindcss setup

`tailwind.config.js`

```javascript
const defaultTheme = require("tailwindcss/defaultTheme")
const { resolveConfig } = require("@retail-ui/core")

module.exports = resolveConfig({
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"], # your purge files
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

Wrapping our `Provider`

Here is a sample of `Next.js` setup

Your `_app.tsx` root file

```tsx
import { ThemeProvider, defaultTheme } from '@retail-ui/core'
import { OtherProvider } from 'other-packages'

const AppProvider: React.FC = ({ children }) => {
  return (
    <OtherProvider>
      <RetailProvider value={{ theme: defaultTheme }}>
        {children}
      </RetailProvider>
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
