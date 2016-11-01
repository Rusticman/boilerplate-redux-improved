/* global io */
import { Map, List } from 'immutable';
import { MESSAGE_RECEIVED, SEND_MESSAGE } from '../actions';

const initialState = new Map({
  socket: io.connect('localhost:3000'),
  messages: new List()
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      state.get('socket').emit('new_message', action.message);
      return state;
    }
    case MESSAGE_RECEIVED: {
      return state.set('messages', state.get('messages').push(action.message));
    }
    default: {
      return state;
    }
  }
};
