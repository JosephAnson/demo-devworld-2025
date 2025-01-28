import { boolean, decimal, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  inStock: boolean('in_stock').notNull().default(true),
})
