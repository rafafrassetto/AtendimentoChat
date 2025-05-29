# Changelog

# [2.0.0] - 2025 (Refatoração Clean Code)

### Adicionado
- **Documentação completa** com JSDoc em todos os componentes
- **Sistema de testes** com ~60% de cobertura (Jest + Testing Library)
- **PropTypes** para validação de props em todos os componentes
- **MessageBuilder** (padrão Fluent Interface) para construção de mensagens
- **Hook useChat** para centralizar a lógica do chat
- **Constantes** para mensagens iniciais e participantes (`chatMessages.js`)
- **ESLint + Prettier** para padronização de código
- **Tratamento de edge cases** (ex: `location.state` undefined)
- **Atributos ARIA** para acessibilidade
- **Data-testids** para testes E2E

### Alterado
- **Chaves únicas** (`key={msg.id}`) em vez de índices no `.map()`
- **Organização modular**: 
  - Componentes divididos em `components/`
  - Lógica em `hooks/` e `helpers/`
  - Constantes separadas
- **Validações extraídas** para funções puras (`isMessageValid`, `isNameValid`)
- **Estados iniciais** movidos para arquivo de constantes
- **Nomenclatura semântica** (ex: `handleSendMessage` em vez de `handleSend`)
- **CSS** aprimorado com estilos mais consistentes

### Removido
- **Código duplicado** (mensagens hardcoded nos componentes)
- **Warnings** do React (uso de índices como keys)
- **Comentários redundantes** (substituídos por JSDoc)
- **Acoplamento desnecessário** entre componentes

## [1.0.0] - 2025 (Versão Inicial)
- Funcionalidades básicas do chat
- Componentes sem documentação
- Código poluído
- Validações inline