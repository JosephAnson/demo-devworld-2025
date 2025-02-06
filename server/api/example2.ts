import { productsResponseSchema } from '~~/schemas/product'

export default defineEventHandler(async () => {
  const response = await $fetch('/api/mock/example2')
  return productsResponseSchema.safeParse(response)
})
