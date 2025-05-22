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
    <div className="login-screen">
      <h1>Support Queue</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Home;