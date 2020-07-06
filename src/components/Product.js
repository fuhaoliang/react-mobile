import React from 'react';
import PropTypes from 'prop-types';

function Product({ price, quantity, title }) {
  return (
    <div>
      {title}-- {price}
      {quantity ? ` x ${quantity}` : null}
    </div>
  );
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

export default Product;
