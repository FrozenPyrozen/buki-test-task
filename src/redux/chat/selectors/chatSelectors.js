const getItems = state => state.chat.messages;
const getLoading = state => state.chat.isLoading;
const getError = state => state.chat.error;
const getLastMessageTime = state =>
  state.chat.messages[state.chat.messages.length - 1].created_at;

export default {
  getItems,
  getLoading,
  getError,
  getLastMessageTime,
};
