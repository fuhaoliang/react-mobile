import {
  ADD_TO_CART,
  REMOVE_CART,
  BUY_REQUEST,
  BUY_FAILURE,
  BUY_SUCCESS,
} from '../constants/ActionsTypes';
import { combineReducers } from 'redux';

const initState = {
  addedIds: [],
  quantityById: {},
};
// store
// 加入购物车的ids
const addedIds = (state = initState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      if (state.indexOf(productId) === -1) {
        return state.concat([productId]);
      } else {
        return state;
      }
    case REMOVE_CART:
      return [];
    default:
      return state;
  }
};

// 加入购物车的商品对象quantityById
const quantityById = (state = initState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    case REMOVE_CART:
      return {};
    default:
      return state;
  }
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case BUY_REQUEST:
      return initState;
    case BUY_FAILURE:
      return action.cart;
    case BUY_SUCCESS:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
    default:
      return state;
  }
};

export default combineReducers({
  cart,
  addedIds,
  quantityById,
});

// 操作购物车的方法
// 获取购物车id
export const getQuantityById = (state) => state.quantityById;
// 获取购物车对象
export const getAddedIds = (state) => state.addedIds;
