import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chat from './Chat';

describe('Chat Component', () => {
  it('renderiza mensagens iniciais corretamente', () => {
    render(<Chat />);
    expect(screen.getByText('Rafael:')).toBeInTheDocument();
    expect(screen.getByText('Olá!')).toBeInTheDocument();
    expect(screen.getByText('Tudo bem?')).toBeInTheDocument();
  });

  it('adiciona nova mensagem quando enviada', () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText('Digite sua dúvida...');
    fireEvent.change(input, { target: { value: 'Testando' } });
    fireEvent.click(screen.getByText('Enviar'));
    
    expect(screen.getByText('Eu:')).toBeInTheDocument();
    expect(screen.getByText('Testando')).toBeInTheDocument();
  });
});