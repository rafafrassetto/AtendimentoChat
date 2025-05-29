import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegistroChat from './RegistroChat';
import EntradaDeMensagem from './EntradaDeMensagem';

/**
 * Componente principal do chat que gerencia e exibe mensagens
 * @component
 * @example
 */

const Chat = () => {
  const initialMessages = [
    { id: 1, sender: 'atendimento', message: 'Olá!' },
    { id: 2, sender: 'atendimento', message: 'Tudo bem?' },
  ];

  const [messages, setMessages] = useState(initialMessages);

  /**
   * Adiciona uma nova mensagem à lista de mensagens
   * @param {string} message
   */
  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'eu',
      message: message.trim(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="chat-mensagem" data-testid="chat-container">
      <div className="titulo-chat">Atendimento Online</div>
      <div className="mensagens">
        {messages.map((msg) => (
          <RegistroChat
            key={msg.id}
            sender={msg.sender}
            message={msg.message}
          />
        ))}
      </div>
      <EntradaDeMensagem onSendMessage={handleSendMessage} />
    </div>
  );
};

Chat.propTypes = {
  initialMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Chat;