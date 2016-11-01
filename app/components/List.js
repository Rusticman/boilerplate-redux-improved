import React, { PropTypes } from 'react';
import ItemComponent from './item';

const List = ({ messages }) => {
  return (
    <ul id='messages'>
      {messages.map((message, key) => {
        return <ItemComponent message={message} key={key} />;
      })}
    </ul>
  );
};

List.propTypes = {
  messages: PropTypes.object.isRequired
};

export default List;
