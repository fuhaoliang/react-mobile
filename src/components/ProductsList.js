import React from 'react';
import PropTypes from 'prop-types';

function ProductsList({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

ProductsList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ProductsList;
