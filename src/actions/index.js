import * as types from '../constants/ActionsTypes';

// actions

export const getAllProducts = () => ({
  type: types.GET_ALL_PRODUCTS,
});

export const buyProducts = (cart) => ({
  type: types.BUY_REQUEST,
  payload: { cart },
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: { products },
});

const addToCartsUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  payload: { productId },
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartsUnsafe(productId));
  }
};
