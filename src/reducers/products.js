import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionsTypes';
import { combineReducers } from 'redux';
import { zipObject } from 'lodash';

const productObj = (state, action) => {
  console.info('product--->', state);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...zipObject(
          action.payload.products.map((product) => product.id),
          action.payload.products
        ),
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: productObj(state[productId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload.products.map((product) => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));
