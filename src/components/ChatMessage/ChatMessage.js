import React, { useState } from 'react';

import { connect } from 'react-redux';
import { chatOperations } from '../../redux/chat/actions';

import styles from './ChatMessage.module.css';

const ChatMessage = ({
  user = '',
  avatar,
  created_at,
  message,
  deleteMessage,
  editMessage,
  id,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [isLiked, setLike] = useState(false);

  const handleEdit = e => {
    console.log(e.target);

    editMessage({ message: e.target.value, id });
  };

  return (
    <div className={user !== 'me' ? styles.message : styles.myMessage}>
      <img
        src={avatar}
        alt={user}
        width="100"
        height="100"
        className={styles.avatar}
      />

      <div className="userInfo">
        <h3>{user}</h3>
        {isEditing && (
          <input placeholder="Enter new message" onChange={handleEdit} />
        )}
        <p>{message}</p>
        <span className={styles.creationDate}>{created_at}</span>
        <div>
          {user === 'me' ? (
            <>
              <button onClick={() => setEditing(!isEditing)}>
                {!isEditing ? 'Edit' : 'Confirm'}
              </button>
              <button onClick={() => deleteMessage(id)}>Delete</button>
            </>
          ) : (
            <button
              onClick={() => setLike(!isLiked)}
              className={isLiked ? styles.like : styles.isntLike}
            >
              👍
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteMessage: chatOperations.deleteMessage,
  editMessage: chatOperations.editMessage,
};

export default connect(
  null,
  mapDispatchToProps
)(ChatMessage);
