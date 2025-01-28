import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './db/schema'

export const db = drizzle(import.meta.env.DATABASE_URL!, { schema: { ...schema } })
