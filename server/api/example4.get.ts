import { z } from 'zod'
import { db } from '~~/drizzle/db'
import { productSelectSchema } from '~~/drizzle/schema'

export default defineEventHandler(async () => {
  const response = await db.query.products.findMany()
  return z.array(productSelectSchema).safeParse(response)
})
