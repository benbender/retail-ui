# `@retail-ui/eslint-config`

The Prettier + ESLint configuration

## Installation

`yarn add -D @retail-ui/eslint-config`

## Usage

Inside `.eslintrc.js`:

```js
const config = require('@air/eslint-config');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // easily lets you merge and alter existing config blobs as opposed to using just the `extends` key
  ...config,
};
```
