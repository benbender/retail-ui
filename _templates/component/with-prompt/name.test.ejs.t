---
to: packages/<%= name %>/test/<%= h.changeCase.pascal(name) %>.test.tsx
---
import * as React from 'react';
import { render, fireEvent } from '@retail-ui/test-utils';

import <%= h.changeCase.pascal(name) %>Meta, * as <%= h.changeCase.pascal(name) %> from '../stories/<%= h.changeCase.pascal(name) %>.stories';

describe('<%= h.changeCase.pascal(name) %>', () => {
  it('should fire callback onclick', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<<%= h.changeCase.pascal(name) %>.Simple {...{ onClick }} />);

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByTestId(<%= h.changeCase.pascal(name) %>Meta.title));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
