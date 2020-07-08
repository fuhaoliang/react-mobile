import {
  take,
  put,
  call,
  fork,
  select,
  takeEvery,
  takeLatest,
  all,
} from 'redux-saga/effects';
import * as types from '../constants/ActionsTypes';
import * as actions from '../actions/index';
import { getCart } from '../reducers';

import { api } from '../services/index';

export function* getAllProducts() {
  const products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}

export function* watchGetProducts() {
  yield takeEvery(types.GET_ALL_PRODUCTS, getAllProducts);
}

export function* buyProducts() {
  const cart = yield select(getCart);

  try {
    yield call(api.buyProducts, cart);
    yield put({ type: [types.BUY]['SUCCESS'] });
  } catch (error) {
    yield put({ type: [types.BUY]['FAILURE'], payload: { cart } });
  }
}

export function* watchBuyProducts() {
  while (true) {
    yield take([types.BUY]['REQUEST']);

    yield call(buyProducts);
  }
}

export default function* root() {
  yield all([fork(watchGetProducts), fork(watchBuyProducts)]);
}
