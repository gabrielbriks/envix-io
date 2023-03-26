import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return reply.status(201).send()
  })

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

  app.get('/list', async () => {
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
