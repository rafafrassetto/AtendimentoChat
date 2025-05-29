import React from 'react'; // importa o React da biblioteca 'react'
import { useLocation } from 'react-router-dom'; // importa o hook useLocation da biblioteca 'react-router-dom'
import Chat from '../components/Chat'; // importa o componente Chat

const ChatInicial = () => {
  const location = useLocation(); // inicializa o hook useLocation para acessar o estado da navegação
  const { name } = location.state; // extrai a propriedade 'name' do estado passado na navegação

  return (
    <div className="mensagem-bem-vindo">
      <h1>Seja Bem vindo(a), {name}! Aguarde para ser atendido.</h1>
      <Chat /> {/* Renderiza o componente Chat */}
    </div>
  );
};

export default ChatInicial; // exporta o componente ChatInicial como padrão
