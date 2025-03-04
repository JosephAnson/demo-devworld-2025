import { z } from 'zod'

// Base Product Schema
export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z
    .string()
    .min(20, {
      message: 'Product description must be at least 20 characters.',
    }),
  price: z
    .number()
    .positive({
      message: 'Price must be a positive number.',
    })
    .min(1, {
      message: 'Price must be at least 1.',
    }),
  inStock: z.boolean(),
  status: z.enum(['AVAILABLE', 'DISCONTINUED']),
})

export type ProductSchema = z.infer<typeof productSchema>

// Update Product Schema
export const updateProductSchema = productSchema.omit({ id: true })
export type UpdateProductSchema = z.infer<typeof updateProductSchema>

// Response Schema
export const productsResponseSchema = z.array(productSchema)
export type ProductsResponseSchema = z.infer<typeof productsResponseSchema>
