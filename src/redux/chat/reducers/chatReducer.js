import { combineReducers } from 'redux';
import types from '../actions/chatActionTypes';

function messagesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_MESSAGE_SUCCESS:
      return [...state, payload];
    case types.DELETE_MESSAGE_SUCCESS:
      return state.filter(item => item.id !== payload);
    case types.EDIT_MESSAGE_SUCCESS:
      return state.map(item => (item.id === payload.id ? payload : item));

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;
    case types.FETCH_SUCCESS:
    case types.ADD_MESSAGE_SUCCESS:
    case types.DELETE_MESSAGE_SUCCESS:
    case types.EDIT_MESSAGE_SUCCESS:
      return false;
    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;
    case types.FETCH_ERROR:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  messages: messagesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
