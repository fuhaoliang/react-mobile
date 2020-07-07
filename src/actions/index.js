import shop from '../api/shop';
import * as types from '../constants/ActionsTypes';

// actions

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

const addToCartsUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const buyProducts = () => (dispatch, getState) => {
  const { cart } = getState();
  dispatch({
    type: types.BUY_REQUEST,
    cart,
  });

  shop.buyProducts(cart, () => {
    dispatch({
      type: types.BUY_SUCCESS,
    });
    // dispatch({
    //   type: types.REMOVE_CART,
    // });
  });
};

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartsUnsafe(productId));
  }
};
