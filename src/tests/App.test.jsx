import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import GlobalStyles from '@/globalStyles';
import App from '@/components/App/App';

describe('App component', () => {
  const root = document.createElement('div');
  it('should renders without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </Provider>,
    );

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </Provider>,
      root,
    );
    ReactDOM.unmountComponentAtNode(root);
  });
});
