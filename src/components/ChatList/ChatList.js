import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChatMessage from '../ChatMessage';
import { chatOperations, chatSelectors } from '../../redux/chat/actions';

import styles from './ChatList.module.css';

const ChatList = ({ messages = [], fetchMessages }) => {
  useEffect(() => {
    fetchMessages();
    return;
  }, [fetchMessages]);

  return (
    <ul className={styles.list}>
      {messages.map(el => (
        <li key={el.id}>
          <ChatMessage {...el} />>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  messages: chatSelectors.getItems(state),
});

const mapDispatchToProps = {
  fetchMessages: chatOperations.fetchMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);
