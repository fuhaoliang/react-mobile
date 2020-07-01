import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  return (
    <a href="" onClick={() => onClick()}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
