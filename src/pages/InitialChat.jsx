import React from 'react';
import { useLocation } from 'react-router-dom';
import Chat from '../components/Chat';

const InitialChat = () => {
  const location = useLocation();
  const { name } = location.state;

  return (
    <div className="welcome-message">
      <h1>Welcome, {name}! Please wait to be attended.</h1>
      <Chat />
    </div>
  );
};

export default InitialChat;