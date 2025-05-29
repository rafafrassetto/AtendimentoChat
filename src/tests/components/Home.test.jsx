import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renderiza formulário corretamente', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('Fila de Atendimento')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });

  it('valida nome antes de enviar', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    fireEvent.click(screen.getByText('Entrar'));
    expect(mockNavigate).not.toHaveBeenCalled();
    
    const input = screen.getByPlaceholderText('Digite seu nome');
    fireEvent.change(input, { target: { value: 'João' } });
    fireEvent.click(screen.getByText('Entrar'));
    expect(mockNavigate).toHaveBeenCalledWith('/chat', { state: { name: 'João' } });
  });
});