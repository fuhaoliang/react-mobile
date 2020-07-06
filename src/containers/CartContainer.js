import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import { buyProducts } from '../actions/index';
import { getCartTotal, getCartProducts } from '../reducers/index';
function CartContainer({ products, total, buyProducts }) {
  return (
    <>
      <Cart
        products={products}
        total={total}
        onBuyProductsClicked={() => buyProducts()}
      />
    </>
  );
}

CartContainer.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
  }),
  total: PropTypes.number,
  buyProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getCartTotal(state),
});

export default connect(mapStateToProps, { buyProducts })(CartContainer);
