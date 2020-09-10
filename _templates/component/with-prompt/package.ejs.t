---
to: packages/<%= name %>/package.json
---
{
  "name": "@retail-ui/<%= name %>",
  "version": "0.1.0",
  "description": "The <%= h.changeCase.pascal(name) %> component of @retail-ui",
  "keywords": [
    "react",
    "components",
    "<%= h.changeCase.pascal(name) %>",
    "typescript",
    "tsdx"
  ],
  "homepage": "https://github.com/sondh0127/retail-ui/tree/master/packages/<%= name %>#readme",
  "license": "MIT",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  },
  "main": "dist/index.js",
  "module": "dist/<%= name %>.esm.production.js",
  "typings": "dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "engines": {
    "node": ">=10"
  },
  "repository": {
    "directory": "packages/<%= name %>",
    "type": "git",
    "url": "git+https://github.com/sondh0127/retail-ui.git"
  },
  "bugs": {
    "url": "https://github.com/sondh0127/retail-ui/issues"
  },
  "scripts": {
    "start": "tsdx watch --verbose --noClean",
    "build": "tsdx build --tsconfig tsconfig.build.json",
    "test": "tsdx test --passWithNoTests",
    "lint": "tsdx lint"
  },
  "peerDependencies": {
    "react": ">=16"
  },
  "dependencies": {}
}
