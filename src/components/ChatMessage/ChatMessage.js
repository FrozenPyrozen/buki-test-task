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
    editMessage({ message: e.target.value });
  };

  return (
    <div className={user !== 'me' ? styles.message : styles.myMessage}>
      <h3>{user}</h3>
      <img src={avatar} alt={user} />
      {isEditing && (
        <input placeholder="Enter new message" onChange={handleEdit} />
      )}
      <p>{message}</p>
      <span>{created_at}</span>
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
            className={isLiked && styles.like}
          >
            Like
          </button>
        )}
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
