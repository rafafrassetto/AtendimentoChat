import React, { useState } from 'react'; // importa o React e o hook useState da biblioteca 'react'
import RegistroChat from './RegistroChat'; // importa o componente RegistroChat
import EntradaDeMensagem from './EntradaDeMensagem'; // importa o componente EntradaDeMensagem

const Chat = () => {
  // define um estado 'messages' com uma lista inicial de mensagens e uma função 'setMessages' para atualizar esse estado
  const [messages, setMessages] = useState([
    { sender: 'atendimento', message: 'Olá!' },
    { sender: 'atendimento', message: 'Tudo bem?' }
  ]);

  // função para adicionar uma nova mensagem à lista de mensagens
  const handleSendMessage = (message) => {
    // atualiza o estado 'messages' adicionando a nova mensagem ao final da lista
    setMessages([...messages, { sender: 'eu', message }]);
  };
  

  return (
    <div className="chat-mensagem">
      <div className="titulo-chat">Atendimento Online</div>
      <div className="mensagens">
        {/* mapeia a lista de mensagens e renderiza um componente RegistroChat para cada uma */}
        {messages.map((msg, index) => (
          <RegistroChat key={index} sender={msg.sender} message={msg.message} />
        ))}
      </div>
      <EntradaDeMensagem onSendMessage={handleSendMessage} /> {/* componente de input para enviar novas mensagens */}
    </div>
  );
};

export default Chat; // exporta o componente Chat como padrão
