import React, { useState } from 'react';

// define o componente funcional EntradaDeMensagem
const EntradaDeMensagem = ({ onSendMessage }) => {
  const [message, setMessage] = useState(''); // define um estado 'message' com um valor inicial vazio e uma função 'setMessage' para atualizar esse estado

  const handleSend = () => {
    if (message.trim()) { // verifica se a mensagem não está vazia após remover espaços em branco
      onSendMessage(message); // chama a função 'onSendMessage' passando a mensagem como argumento
      setMessage(''); // limpa o campo de input
    }
  };

  return (
    <div className="chat-duvida">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)} // atualiza o estado 'message' com o valor do input
        placeholder="Digite sua dúvida..."
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default EntradaDeMensagem;
