import React, { useState } from 'react'; // importa o React e o hook useState da biblioteca 'react'
import { useNavigate } from 'react-router-dom'; // importa o hook useNavigate da biblioteca 'react-router-dom'

const Home = () => {
  const [name, setName] = useState(''); // define um estado 'name' com um valor inicial vazio e uma função 'setName' para atualizar esse estado
  const navigate = useNavigate(); // inicializa o hook useNavigate para navegação

  const handleSubmit = (event) => {
    event.preventDefault(); // previne o comportamento padrão do formulário de recarregar a página
    if (name.trim()) { // verifica se o nome não está vazio após remover espaços em branco
      navigate('/chat', { state: { name } }); // navega para a o arquivo '/chat' passando o estado 'name'
    }
  };

  return (
    <div className="tela-de-login">
      <h1>Fila de Atendimento</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)} // atualiza o estado 'name' com o valor do input
          placeholder="Digite seu nome"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Home;
