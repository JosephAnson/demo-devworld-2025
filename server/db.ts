import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { envSchema } from '~~/schemas/env'
import * as schema from './db/schema'

const env = envSchema.parse(process.env)

export const db = drizzle(env.DATABASE_URL, { schema: { ...schema } })
