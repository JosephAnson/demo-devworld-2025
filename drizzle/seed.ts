import { seed } from 'drizzle-seed'
import { db } from './db'
import { products } from './schema'

async function main() {
  await seed(db, { products })
}
main()
