import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app.get('/new', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*') //Para retornar todas as informações que foram inseridas

  return transaction
})

app.get('/get', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app.get('/get/filter', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server Running')
  })
