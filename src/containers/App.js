import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import '../styles/modules/app.less';

function App() {
  return (
    <div>
      <h2 className="ft12">Shoping Cart Example</h2>
      <ProductsContainer />
      <CartContainer />
    </div>
  );
}

export default App;
