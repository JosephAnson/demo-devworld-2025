import { z } from 'zod'

// Base Product Schema
export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  price: z.number().positive({
    message: 'Price must be a positive number.',
  }),
  inStock: z.boolean(),
  available: z.enum(['AVAILABLE', 'DISCONTINUED']),
}).describe('Product Details')

export type Product = z.infer<typeof ProductSchema>

// Response Schema
export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
})

export type ProductsResponse = z.infer<typeof ProductsResponseSchema>
