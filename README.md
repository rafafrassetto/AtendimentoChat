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

## Estratégia de Refatoração
### **Princípios Aplicados**:
1. **Extract Method**:  
   - Lógica de validação extraída para `isMessageValid` e `isNameValid`  
   - Mensagens iniciais movidas para `constants/chatMessages.js`  

2. **Single Responsibility**:  
   - Componentes divididos (ex: `EntradaDeMensagem` só cuida do input)  
   - Lógica do chat isolada no hook `useChat`  

3. **Fluent Interface**:  
   - Padrão Builder em `MessageBuilder` para criação de mensagens:  
     ```javascript
     new MessageBuilder().withId(1).from('user').withText('Hi').build()
     ```

4. **Testabilidade**:  
   - Componentes com `data-testid` para seleção em testes  
   - Funções puras para validação (fáceis de testar)  

### **Code Smells Resolvidos**:
| Smell                | Solução                          | Arquivo Afetado         |
|----------------------|----------------------------------|-------------------------|
| Duplicated Code      | Mensagens em constants          | `chatMessages.js`       |
| Long Methods         | Validações extraídas            | `EntradaDeMensagem.jsx` |
| Primitive Obsession  | MessageBuilder para estruturar   | `MessageBuilder.js`     |

---

## Descrição dos Testes Implementados
### **Suíte de Testes** (60%+ de cobertura)
#### **1. Testes de Componentes**:
- **Chat**:  
  - Verifica renderização das mensagens iniciais  
  - Testa adição de nova mensagem (`Chat.test.jsx`)  
  ```javascript
  it('adiciona nova mensagem quando enviada', () => {
    fireEvent.change(input, { target: { value: 'Teste' } });
    fireEvent.click(screen.getByText('Enviar'));
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
  
## Interface Fluente
Implementada no builder de mensagens em Chat.jsx através da função handleSendMessage que retorna uma nova mensagem com estrutura consistente.


## Demonstração da versão sem as alterações realizadas

https://github.com/rafafrassetto/AtendimentoChat/assets/88680818/228f6fb7-7fe3-4d79-a8a2-d5a569d9ce59
