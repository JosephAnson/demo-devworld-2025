import { drizzle } from 'drizzle-orm/node-postgres'
import { seed } from 'drizzle-seed'
import * as schema from '~~/drizzle/schema'
import { envSchema } from '~~/schemas/env'
import 'dotenv/config'

const env = envSchema.parse(process.env)

export const db = drizzle(env.DATABASE_URL, { schema: { ...schema } })

seed(db, { products: schema.products })
