import React from 'react';

import styles from './ChatMessage.module.css';

const ChatMessage = ({ user, avatar, created_at, message }) => {
  return (
    <div className={styles.message}>
      <h3>{user}</h3>
      <img src={avatar} alt={user} />
      <p>{message}</p>
      <span>{created_at}</span>
      <div>
        {user === 'me' ? (
          <>
            <button>Edit</button>
            <button>Delete</button>
          </>
        ) : (
          <button>Like</button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
