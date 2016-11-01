import React, { PropTypes } from 'react';

const Item = ({ message }) => {
  return (
    <li>{message}</li>
  );
};

Item.propTypes = {
  message: PropTypes.string.isRequired
};

export default Item;
