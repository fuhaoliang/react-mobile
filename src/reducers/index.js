import products from './products';
import cart from './cart';

import { combineReducers } from 'redux';

export default combineReducers({
  products,
  cart,
});

export const getCartTotal = (state) => {
  return state.cart.addedIds.reduce(
    (total, addedId) => total + state.cart.quantityById[addedId],
    0
  );
};

export const getCartProducts = (state) => {
  return state.cart.addedIds.map((addedId) => {
    const cartProduct = { ...state.products.byId[addedId] };
    cartProduct.quantity = state.cart.quantityById[addedId];
    return cartProduct;
  });
};
