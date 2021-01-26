// eslint-disable-next-line import/no-duplicates
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// eslint-disable-next-line import/no-duplicates
import { applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-unresolved
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

// eslint-disable-next-line no-unused-vars
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;
