import _products from './products.json';

const TIMEOUT = 100;

export default {
  getProducts: (cd, timeout) =>
    setTimeout(() => cd(_products), timeout || TIMEOUT),
  buyProducts: (payload, cd, timeout) =>
    setTimeout(() => cd(), timeout || TIMEOUT),
};
