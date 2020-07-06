import { ADD_TO_CART } from '../constants/ActionsTypes';

const initState = {
  addedIds: [],
  quantityById: {},
};
// store
// 加入购物车的ids
const addedIds = (state = initState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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
    default:
      return state;
  }
};

// 操作购物车的方法
// 获取购物车对象

// 获取购物车id
