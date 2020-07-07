import _products from './products.json';

const TIMEOUT = 1000;

export const api = {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(_products), TIMEOUT);
    });
  },
  buyProducts(payload) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(payload) || TIMEOUT);
    });
  },
};
