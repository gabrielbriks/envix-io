//eslint-disable-next-line

declare module 'knex/types/tables' {
  export interface Table {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
