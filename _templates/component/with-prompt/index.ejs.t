---
to: packages/<%= name %>/src/index.tsx
---
export * from './<%= h.changeCase.pascal(name) %>'
