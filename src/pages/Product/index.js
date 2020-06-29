import React from 'react';
import { renderRoutes } from 'react-router-config';
function Product(props) {
  console.info(props);
  return (
    <div>
      <h3>我是产品</h3>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default Product;
