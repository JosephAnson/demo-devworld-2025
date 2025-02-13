import { db } from '~~/drizzle/db'
import { productInsertSchema, products } from '~~/drizzle/schema'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, productInsertSchema.parse)
  return await db.insert(products).values(body).returning()
})
