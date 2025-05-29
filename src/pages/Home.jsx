import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Página inicial com formulário de entrada
 * @component
 * @example
 */

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  /**
   * Valida e envia o formulário
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNameValid(name)) {
      navigate('/chat', { state: { name: name.trim() } });
    }
  };

  /**
   * Verifica se o nome é válido
   * @param {string} userName
   * @returns {boolean}
   */

  const isNameValid = (userName) => userName.trim().length > 0;

  return (
    <div className="tela-de-login" data-testid="home-page">
      <h1>Fila de Atendimento</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          aria-label="Digite seu nome"
        />
        <button type="submit" disabled={!isNameValid(name)}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Home;