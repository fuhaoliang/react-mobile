import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({ product, onAddToCartClicked }) {
  return (
    <div>
      <div>
        {product.title}-- {product.price}
        {product.quantity ? ` x ${product.quantity}` : null}
      </div>
      <button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}
      >
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
