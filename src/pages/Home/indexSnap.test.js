import React from 'react';
import App from './index';
import ReactDOM from 'react-dom';
it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />,div)
    expect(div).toMatchSnapshot();
});