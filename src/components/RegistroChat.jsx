import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente que exibe uma única mensagem do chat
 * @component
 * @param {string} sender
 * @param {string} message
 * @example
 */
const RegistroChat = ({ sender, message }) => {
  const isUser = sender === 'eu';
  const senderName = isUser ? 'Eu' : 'Rafael';
  const messageClass = isUser ? 'mensagem-emitente' : 'atendente-message';

  return (
    <div className={`message ${sender}`} data-testid="chat-message">
      <span>{senderName}:</span>
      <div className={messageClass}>{message}</div>
    </div>
  );
};

RegistroChat.propTypes = {
  sender: PropTypes.oneOf(['eu', 'atendimento']).isRequired,
  message: PropTypes.string.isRequired,
};

export default RegistroChat;