import * as api from '../../../services/api';
import actions from './chatActions';

const fetchMessages = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const messages = await api.getAllMessages();

    dispatch(actions.fetchSuccess(messages));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addMessage = message => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    dispatch(actions.addMessageSuccess(message));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteMessage = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    dispatch(actions.deleteMessageSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const editMessage = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    dispatch(actions.editMessageSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchMessages, deleteMessage, editMessage, addMessage };
