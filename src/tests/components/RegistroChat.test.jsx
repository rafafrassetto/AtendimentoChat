import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistroChat from './RegistroChat';

describe('RegistroChat', () => {
  it('renderiza mensagem do atendente corretamente', () => {
    render(<RegistroChat sender="atendimento" message="Olá!" />);
    expect(screen.getByText('Rafael:')).toBeInTheDocument();
    expect(screen.getByText('Olá!')).toBeInTheDocument();
  });

  it('renderiza mensagem do usuário corretamente', () => {
    render(<RegistroChat sender="eu" message="Tudo bem?" />);
    expect(screen.getByText('Eu:')).toBeInTheDocument();
    expect(screen.getByText('Tudo bem?')).toBeInTheDocument();
  });
});