# Envix.io API
API base construída em Node.js + Fastify, para registrar transações de finanças pessoais

## Description of requirements for the project

### RF - Requirement Functionality

- [x] O usuário deve poder criar uma nova transação
- [x] O usuário deve poder obter um resumo da sua conta
- [x] O usuário deve poder listar todas as transações que já ocorreram
- [x] O usuário deve poder visualizar uma transação única

### RN - Rule of Business

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
- [x] Deve ser possível identificarmos o usuário entre as requisições
- [x] O usuário só pode visualizar transações o qual ele criou

### RNF - Requirement no Functionality

- Utilizar Node.js com o micro framework Fastify.
- Utilizar Typescript
- Utilizar Vitest para construção de testes automatizados
- Utilizar o Knex como QueryBuilder 
- Utilizar o banco de dados PostgreSQL em produção e o Sqlite em desenvolvimento
