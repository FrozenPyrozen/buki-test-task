import React from 'react';
import { connect } from 'react-redux';
import ChatMessage from '../ChatMessage';
import { chatSelectors } from '../../redux/chat/actions';

import styles from './ChatList.module.css';
import Loader from '../Loader';

const ChatList = ({ messages = [], isLoading }) => {
  return (
    <ul className={styles.list}>
      {isLoading && <Loader />}
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
  isLoading: chatSelectors.getLoading(state),
});

export default connect(mapStateToProps)(ChatList);
