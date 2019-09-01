import types from './chatActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = messages => ({
  type: types.FETCH_SUCCESS,
  payload: messages,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const addMessageSuccess = message => ({
  type: types.ADD_MESSAGE_SUCCESS,
  payload: message,
});

const deleteMessageSuccess = id => ({
  type: types.DELETE_MESSAGE_SUCCESS,
  payload: id,
});

const editMessageSuccess = message => ({
  type: types.EDIT_MESSAGE_SUCCESS,
  payload: message,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addMessageSuccess,
  deleteMessageSuccess,
  editMessageSuccess,
};
