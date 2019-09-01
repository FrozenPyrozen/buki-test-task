import React, { useState } from 'react';
import { connect } from 'react-redux';

import { chatOperations } from '../../redux/chat/actions';
import styles from './CreateMessage.module.css';

const CreateMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('');
  return (
    <div className={styles.container}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addMessage({
            user: 'me',
            message,
            created_at: new Date().toLocaleString(),
            avatar:
              'https://avatars3.githubusercontent.com/u/38257513?s=400&v=4',
          });
        }}
      >
        <input
          className={styles.input}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type something..."
        />
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addMessage: chatOperations.addMessage,
};

export default connect(
  null,
  mapDispatchToProps
)(CreateMessage);
