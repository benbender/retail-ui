---
to: packages/<%= name %>/test/<%= h.changeCase.pascal(name) %>.test.tsx
---
import * as React from 'react';
import { render } from '@retail-ui/test-utils';

import * as <%= h.changeCase.pascal(name) %> from '../stories/<%= h.changeCase.pascal(name) %>.stories';

describe('<%= h.changeCase.pascal(name) %>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<<%= h.changeCase.pascal(name) %>.Simple />)
    expect(asFragment()).toMatchSnapshot()
  });
});
