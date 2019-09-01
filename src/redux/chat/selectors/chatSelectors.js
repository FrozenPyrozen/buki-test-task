const getItems = state => state.chat.messages;
const getLoading = state => state.chat.isLoading;
const getError = state => state.chat.error;

const getLastMessageTime = state => {
  const messages = getItems(state);
  if (!messages[messages.length - 1]) return;

  return messages[messages.length - 1].created_at;
};
const getItemsLength = state => {
  const messages = getItems(state);
  return messages.length;
};
const getUsers = state => {
  const messages = getItems(state);
  if (!messages) return;
  return messages && new Set(messages.map(el => el.user)).size;
};

export default {
  getItems,
  getLoading,
  getError,
  getLastMessageTime,
  getItemsLength,
  getUsers,
};
