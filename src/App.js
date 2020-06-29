import React, { useEffect } from 'react';
import './App.css';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// {renderRoutes(props.routes)}
function App(props) {
  useEffect(() => {
    console.info('props', props);
  });
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" inline size="small" disabled>
          primary disabled
        </Button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product/1">product</Link>
      </header>
      <div>{renderRoutes(props.route.routes)}</div>
    </div>
  );
}

export default App;
