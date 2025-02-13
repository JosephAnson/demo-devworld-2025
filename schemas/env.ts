import { z } from 'zod'

// Environment Schema
export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
})
