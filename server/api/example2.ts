import { ProductsResponseSchema } from '../schemas/product'

export default defineEventHandler(async () => {
  const response = await $fetch('/api/mockProductEndpoint')
  return ProductsResponseSchema.safeParse(response)
})
