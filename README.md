# Atendimento Chat - Refatoração Clean Code

# Equipe : Rafael Frassetto, João Rosso, João Acordi

# Para conferir o CHANGELOG [Clique Aqui](/CHANGELOG.md)

## Descrição
Sistema de chat para atendimento ao cliente com duas páginas:
1. Página inicial para inserção do nome
2. Página do chat com mensagens pré-definidas e entrada para novas mensagens

## Principais Melhorias
- Adicionado ESLint e Prettier para padronização de código
- Implementado PropTypes para validação de props
- Adicionado JSDoc para documentação dos componentes
- Criação de testes
- Refatorado para usar IDs únicos em vez de índices como keys
- Extraída lógica de validação para funções separadas
- Adicionado tratamento para casos edge (ex: location.state undefined)
- Código organizado e limpo sem comentários desnecessários

## Como Executar

1. Clone o repositório em sua máquina através do `git clone` ou baixe este código
2. Após a instalação digite o comando `npm install` em seu terminal

## Aplicação

Digite `npm run dev` em seu terminal e abra o link `http://localhost:5173/`


## Interface Fluente
Implementada no builder de mensagens em Chat.jsx através da função handleSendMessage que retorna uma nova mensagem com estrutura consistente.


## Demonstração da versão anterior as alterações realizadas

https://github.com/rafafrassetto/AtendimentoChat/assets/88680818/228f6fb7-7fe3-4d79-a8a2-d5a569d9ce59