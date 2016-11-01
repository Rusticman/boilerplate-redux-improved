import React, { PropTypes } from 'react';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input /><button>Send</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
