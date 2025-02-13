import { boolean, decimal, integer, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const status = pgEnum('product_status', ['AVAILABLE', 'DISCONTINUED'])

export const products = pgTable('products', {
  id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
  name: text('name').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  inStock: boolean('in_stock').notNull().default(true),
  status: status('product_status').notNull().default('AVAILABLE'),
})

export const productSelectSchema = createSelectSchema(products)
export type ProductSelectSchema = typeof productSelectSchema

export const productInsertSchema = createInsertSchema(products, {
  name: schema => schema.min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
}).omit({ id: true })
export type ProductInsertSchema = typeof productInsertSchema
