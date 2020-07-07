import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
const Cart = ({ products, total, onBuyProductsClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => {
      return <Product product={product} key={product.id} />;
    })
  ) : (
    <em>Please add some products to cart.</em>
  );
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total:{total}</p>
      <button
        onClick={() => onBuyProductsClicked()}
        disabled={hasProducts ? '' : 'disabled'}
      >
        Buy checkout products
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  onBuyProductsClicked: PropTypes.func.isRequired,
};

export default Cart;
