import React, { Component } from 'react';
import { connect } from 'react-redux';


class Graph extends Component {
  render () {
    return (
      <div className='graphContainer'>
        <h1>Stock Checker</h1>
      </div>
    );
  }
}

export default connect()(Graph);
