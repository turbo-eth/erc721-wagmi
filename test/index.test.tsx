import * as React from 'react';

import * as ReactDOM from 'react-dom';

describe('Components', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.createPortal(<div>hello world</div>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
