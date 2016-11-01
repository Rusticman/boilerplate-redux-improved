import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListComponent from '../components/List';
import { receiveMessage } from '../actions';

class ListContainer extends Component {
  componentDidMount () {
    this.props.socket.on('message_received', function (msg) {
      this.props.dispatch(receiveMessage(msg));
    }.bind(this));
  }
  render () {
    const { messages } = this.props;

    return <ListComponent messages={messages} />;
  }
}

const mapStateToProps = (state) => {
  return {
    socket: state.get('socket'),
    messages: state.get('messages')
  };
};

export default connect(mapStateToProps)(ListContainer);
