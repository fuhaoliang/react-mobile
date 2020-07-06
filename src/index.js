import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
import App from './containers/App';

const middleware = [thunk];
middleware.push(createLogger());

let store = createStore(reducer, applyMiddleware(...middleware));

// store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
