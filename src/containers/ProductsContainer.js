import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

import { getVisibleProducts } from '../reducers/products';
import { addToCart } from '../actions';
import { connect, useDispatch } from 'react-redux';
import { getAllProducts } from '../actions/index';

function ProductsContainer({ products, addToCart }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <ProductsList title="商品列表">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        ))}
      </ProductsList>
    </div>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
});

export default connect(mapStateToProps, { addToCart })(ProductsContainer);
