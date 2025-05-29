import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente para entrada de novas mensagens
 * @component
 * @param {function} onSendMessage
 * @example
 */

const EntradaDeMensagem = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  /**
   * Valida e envia a mensagem
   * @returns {void}
   */
  
  const handleSend = () => {
    if (isMessageValid(message)) {
      onSendMessage(message);
      setMessage('');
    }
  };

  /**
   * Verifica se a mensagem é válida
   * @param {string} msg
   * @returns {boolean}
   */
  const isMessageValid = (msg) => msg.trim().length > 0;

  return (
    <div className="chat-duvida" data-testid="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Digite sua dúvida..."
        aria-label="Digite sua mensagem"
      />
      <button onClick={handleSend} disabled={!isMessageValid(message)}>
        Enviar
      </button>
    </div>
  );
};

EntradaDeMensagem.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default EntradaDeMensagem;