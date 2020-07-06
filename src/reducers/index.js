import products from './products';
import cart from './cart';

import { combineReducers } from 'redux';

export default combineReducers({
  products,
  cart,
});
