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
