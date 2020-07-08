import * as types from '../constants/ActionsTypes';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function action(type, payload = {}) {
  return { type, ...payload };
}
// actions

export const getAllProducts = () => ({
  type: types.GET_ALL_PRODUCTS,
});

export const buyProducts = (cart) => ({
  type: [types.BUY][SUCCESS],
  payload: { cart },
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: { products },
});

export const addToCart = (productId) => ({
  type: types.ADD_TO_CART,
  payload: { productId },
});
