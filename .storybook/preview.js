import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

const ThemeWrapper = (Story) => <Story />;

export const decorators = [ThemeWrapper];
