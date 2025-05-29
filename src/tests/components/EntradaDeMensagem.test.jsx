import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntradaDeMensagem from './EntradaDeMensagem';

describe('EntradaDeMensagem', () => {
  const mockSendMessage = jest.fn();

  beforeEach(() => {
    render(<EntradaDeMensagem onSendMessage={mockSendMessage} />);
  });

  it('renderiza corretamente', () => {
    expect(screen.getByPlaceholderText('Digite sua dúvida...')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('permite digitar mensagem', () => {
    const input = screen.getByPlaceholderText('Digite sua dúvida...');
    fireEvent.change(input, { target: { value: 'Olá' } });
    expect(input.value).toBe('Olá');
  });

  it('chama onSendMessage quando o botão é clicado', () => {
    const input = screen.getByPlaceholderText('Digite sua dúvida...');
    fireEvent.change(input, { target: { value: 'Teste' } });
    fireEvent.click(screen.getByText('Enviar'));
    expect(mockSendMessage).toHaveBeenCalledWith('Teste');
  });

  it('não chama onSendMessage quando a mensagem está vazia', () => {
    fireEvent.click(screen.getByText('Enviar'));
    expect(mockSendMessage).not.toHaveBeenCalled();
  });
});