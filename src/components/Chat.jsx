import React, { useState } from 'react';
import ChatRecord from './ChatRecord';
import MessageInput from './MessageInput';

const ATTENDANT_NAME = 'Rafael';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'attendant', message: 'Hello!' },
    { sender: 'attendant', message: 'How are you?' }
  ]);

  const addMessage = (message) => {
    setMessages([...messages, { sender: 'me', message }]);
  };

  return (
    <div className="chat-message">
      <div className="chat-title">Online Support</div>
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatRecord 
            key={index} 
            sender={msg.sender} 
            message={msg.message} 
            attendantName={ATTENDANT_NAME}
          />
        ))}
      </div>
      <MessageInput onSendMessage={addMessage} />
    </div>
  );
};

export default Chat;
