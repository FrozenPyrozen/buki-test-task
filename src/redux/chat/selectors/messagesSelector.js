const getItems = state => state.chat.messages;
const getLoading = state => state.chat.isLoading;
const getError = state => state.chat.error;

export default {
  getItems,
  getLoading,
  getError,
};
