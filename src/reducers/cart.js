import { ADD_TO_CART, BUY } from '../constants/ActionsTypes';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const initState = {
  addedIds: [],
  quantityById: {},
};
// store
// 加入购物车的ids
const addedIds = (state = initState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action.payload;
      if (state.indexOf(productId) === -1) {
        return state.concat([productId]);
      } else {
        return state;
      }
    default:
      return state;
  }
};

// 加入购物车的商品对象quantityById
const quantityById = (state = initState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action.payload;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    default:
      return state;
  }
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case BUY[REQUEST]:
      return initState;
    case BUY[FAILURE]:
      return action.payload.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;

// 操作购物车的方法
// 获取购物车id
export const getQuantityById = (state) => state.quantityById;
// 获取购物车对象
export const getAddedIds = (state) => state.addedIds;
