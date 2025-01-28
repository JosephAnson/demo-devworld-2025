// Example of unsafe type assertions
export interface Product {
  id: string
  name: string
  price: number
  inStock: boolean
}

interface Products {
  products: Product[]
}

export default defineEventHandler(async () => {
  return await $fetch<Products>('/api/mock/example1')
})
