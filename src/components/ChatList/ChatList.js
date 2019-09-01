import React from 'react';
import { connect } from 'react-redux';
import ChatMessage from '../ChatMessage';
import { chatSelectors } from '../../redux/chat/actions';

import styles from './ChatList.module.css';

const ChatList = ({ messages = [], fetchMessages }) => {
  return (
    <ul className={styles.list}>
      {messages.map(el => (
        <li key={el.id}>
          <ChatMessage {...el} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  messages: chatSelectors.getItems(state),
});

export default connect(mapStateToProps)(ChatList);
