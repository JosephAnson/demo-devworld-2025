// Example of unsafe type assertions
export interface Product {
  id: string
  name: string
  price: number
  inStock: boolean
}

export default defineEventHandler(async () => {
  return await $fetch<Product[]>('/api/mock/example1')
})
