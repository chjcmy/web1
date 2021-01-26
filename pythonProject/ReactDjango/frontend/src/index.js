// eslint-disable-next-line no-unused-vars,import/no-extraneous-dependencies
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import '../static/css/index.css';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import App from './components/App';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Store from './components/Store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
