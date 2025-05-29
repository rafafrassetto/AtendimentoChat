import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      navigate('/chat', { state: { name } });
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
