import React from 'react';
import PropTypes from 'prop-types';

function Product({ product }) {
  const { price, quantity, title } = product;
  return (
    <div>
      {title}-- {price}
      {quantity ? ` x ${quantity}` : null}
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Product;
