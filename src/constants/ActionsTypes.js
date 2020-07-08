const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const HTTP_PRODUCTS = 'HTTP_PRODUCTS';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const BUY = createRequestTypes('BUY');
