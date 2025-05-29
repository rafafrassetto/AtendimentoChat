import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chat from '../components/Chat';

/**
 * Página inicial do chat que exibe boas-vindas e o componente Chat
 * @component
 * @example
 */

const ChatInicial = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Usuário' };

  return (
    <div className="mensagem-bem-vindo" data-testid="welcome-message">
      <h1>Seja Bem vindo(a), {name}! Aguarde para ser atendido.</h1>
      <Chat />
    </div>
  );
};

ChatInicial.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default ChatInicial;