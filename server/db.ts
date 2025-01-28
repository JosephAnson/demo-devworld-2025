import { drizzle } from 'drizzle-orm/node-postgres'
import * as relations from '../drizzle/relations'
import * as schema from '../drizzle/schema'
import 'dotenv/config'

export const db = drizzle(import.meta.env.DATABASE_URL!, { schema: { ...relations, ...schema } })
