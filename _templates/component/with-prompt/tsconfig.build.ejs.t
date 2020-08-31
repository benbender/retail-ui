---
to: packages/<%= name %>/tsconfig.build.json
---
{
  "extends": "../../tsconfig.json",
  "include": ["./src"],
  "compilerOptions": {
    "outDir": "./dist"
  }
}
