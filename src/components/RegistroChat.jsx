import React from 'react'; // importa o React da biblioteca 'react'

// define o componente funcional RegistroChat
const RegistroChat = ({ sender, message }) => {
  const isUser = sender === 'eu'; // verifica se o remetente da mensagem é o usuário atual
  return (
    <div className={`message ${isUser ? 'eu' : 'atendimento'}`}>
      <span>{isUser ? 'Eu :' : 'Rafael:'}</span> {/* renderiza o nome do remetente da mensagem */}
      <div className={isUser ? 'mensagem-emitente' : 'atendente-message'}>
        {message} {/* renderiza o conteúdo da mensagem */}
      </div>
    </div>
  );
};

export default RegistroChat; // exporta o componente RegistroChat como padrão

