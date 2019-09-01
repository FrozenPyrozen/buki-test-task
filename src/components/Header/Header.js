import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { chatOperations, chatSelectors } from '../../redux/chat/actions';
import styles from './Header.module.css';

const Header = ({
  fetchMessages,
  messagesLength,
  getLastMessageTime,
  usersCount,
}) => {
  useEffect(() => {
    fetchMessages();
    return;
  }, [fetchMessages]);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <span>My chat</span>
        <span>
          {usersCount} users {messagesLength} messages
        </span>
      </div>
      <span>
        Last message:
        {getLastMessageTime}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  messages: chatSelectors.getItems(state),
  getLastMessageTime: chatSelectors.getLastMessageTime(state),
  messagesLength: chatSelectors.getItemsLength(state),
  usersCount: chatSelectors.getUsers(state),
});

const mapDispatchToProps = {
  fetchMessages: chatOperations.fetchMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
