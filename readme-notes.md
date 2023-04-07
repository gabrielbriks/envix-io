# Notas importantes

## Script para o Knex compreender o uso o TypeScript

- Devido o "knex" não ter suporte ao uso do "typescript" e pelo fato também de utilizamos
a biblioteca "tsx" para compilação do nosso código. Vai ser preciso criarmos um Script
no "package.json" para poder fazer o "knex" compreender o uso o TypeScript.

- Dentro disso teremos o seguinte script para utilização do knex:

```json
  "knex": "node --loader tsx ./node_modules/.bin/knex"
```

- No script acima, estamo dizendo que:
  - Será carregado o "tsx" para executar o "knex" dentro da pasta ".bin".
  Dessa forma vamos conseguir continuar utilizando o "tsx" ao invés de troca-lo
  para um ts-node por exemplo. Visto que o "tsx" é bem mais da hora.

## Execução de comandos utilizando a abordagem acima

- Devido o uso da abordagem acima, sempre que formos executar o "knex" com alguma
flag, como por exemplo a flag de migration `migrate:make`, ou até mesmo a `-h` para help.
Vamos ter que utilizar uma marcação antes, sendo: ` -- `, em seguida escreva o comando.
  - Exemplo:

    ```bash
      npm run knex -- migrate:make nome-da-migration
    ```


## Plugins do Fastify

- Basicamente, nada mais é do que separar vários pedaços da nossa aplicação em vários arquivos.
Um exemplo disso seria separar as rotas da aplicação em módulos, como por exemplos, modulo usuários,
modulo transações e etc.

- Em seguida podemos fazer a importação desses arquivos dentro da aplicação.

## Tipagens no Knex

- Criamos um pasta chamada `@types`, no qual usamos para armazenar tipos que sobrescrevem outros tipos dentro da nossa aplicação, ou tipos globais que também podemos criar.

- Nesse primeiro momento iremos definir uma tipagem para a nossa tabela `transactions`. Pois quando utilizamos "Query Builder" essas tipagens geralmente não são tratadas de forma automáticas;

  - Criamos um arquivo chamado `knex.d.ts`. Basicamente essa extensão `d.ts`, quer sinaliza que esse arquivo é do tipo de *definição de tipos*. 
  - Primeira coisa que devemos fazer ao sobrescrever ou definir um tipo para uma biblioteca, é importar a própria biblioteca em questão.
  
## Utilização de Cookies

- Cookies de forma básica para o nosso cenário, são formas de conseguir manter o contexto entre as requisições
- Estaremos utilizando ele para identificarmos qual usuário que cadastro cada transação. Pois até esse momento não temos um front-end ou controle de login para nos enviar essa informação.


## Entendo testes automatizados

- Testes unitários são testes que validam o comportamento de uma única unidade de código, como uma função ou método. Eles são úteis para garantir que cada parte da aplicação esteja funcionando corretamente, sem depender de outras partes.

- Testes de integração são testes que validam a integração entre várias partes da aplicação, como a integração entre a camada de banco de dados e a camada de serviço. Eles são importantes para garantir que a aplicação esteja funcionando corretamente como um todo.

- Testes e2e (end-to-end) são testes que validam o comportamento da aplicação como um todo, simulando a interação do usuário com a aplicação. Eles são importantes para garantir que a aplicação esteja funcionando corretamente em todos os níveis, desde a camada de interface até a camada de banco de dados.

- A pirâmide de testes é uma estratégia que se baseia em ter mais testes unitários e menos testes de integração e e2e, pois testes unitários são mais rápidos e fáceis de escrever e manter do que outros tipos de testes.

- Segundo a explicação do Diego, é indicado que boa parte das vezes, e principalmente para quem está aprendendo sobre, seja iniciado a construção dos testes pelo `E2E`. São testes que podem ser feitos independentes de arquitetura ou estrutura da aplicação, colocando uma barreira de entrada minima para implementa-los.

### Implementação de Testes

- Utilizaremos o *Vitest* para realizar os testes.
- Realizaremos somente teste E2E(End to End).


#### Utilizando o Supertest

- Estaremos utilizando o *Supertest* para conseguirmos realizar requisições durante os testes E2E, de forma que a aplicação fique no ar durante as requisições sem utilizarmos o "app.listen" em questão. Ou seja, ele sobe a aplicação de forma isolada.

- E para que isso aconteça iremos reacoplar ou melhor dividir o `server.ts` em mais um arquivo chamado `app.ts`, de forma que no `server.ts` permaneça somente o método *listen*.
  - Com essa estratégia, teremos a nossa aplicação disponível para utilizar nos testes sem estar subindo a aplicação em questão.

### Compilação do Projeto e  Deploy

#### Compilação

- Para compilação do projeto, vamos utilizar o tsup

```bash
  npm i tsub -D
```

- Em seguida vamos adicionar o comando a seguir dentro do `package.json` para compilar todo o projeto.

```json
  "build": "tsup src"
```
