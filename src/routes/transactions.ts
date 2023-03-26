import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
