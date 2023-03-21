import { Knex } from 'knex'

//Realizando adição de novo campo na transactions
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', table => {
    //Também digo para ser inserido o campo session_id após a coluna id(alguns BDs não suportam isso).
    //O index no final sinaliza a criação de um índice
    table.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', table => {
    //Também digo para ser inserido o campo session_id após a coluna id(alguns BDs não suportam isso).
    //O index no final sinaliza a criação de um índice
    table.dropColumn('session_id')
  })
}
