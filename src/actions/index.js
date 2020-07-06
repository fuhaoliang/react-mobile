import shop from '../api/shop';
import * as types from '../constants/ActionsTypes';

// actions

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

// const addToCartsUnsafe = (productId) => ({
//   type: types.ADD_TO_CART,
//   productId,
// });

const addToCartsUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

// export const addToCart = (productId) => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCartsUnsafe(productId));
//   }
// };

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byIds[productId].inventory > 0) {
    dispatch(addToCartsUnsafe(productId));
  }
};
