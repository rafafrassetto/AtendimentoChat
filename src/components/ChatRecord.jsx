import React from 'react';

const ChatRecord = ({ sender, message, attendantName }) => {
  const isUser = sender === 'me';
  
  return (
    <div className={`message ${isUser ? 'me' : 'attendant'}`}>
      <span>{isUser ? 'Me:' : `${attendantName}:`}</span>
      <div className={isUser ? 'user-message' : 'attendant-message'}>
        {message}
      </div>
    </div>
  );
};

export default ChatRecord;