import { generateObject } from 'ai'
import { chromeai } from 'chrome-ai'
import { z } from 'zod'
import { productSchema } from '~~/schemas/product'

const bodySchema = z.object({
  message: z.string(),
})

export default defineLazyEventHandler(async () => {
  return defineEventHandler(async (event) => {
    const body = await readValidatedBody(event, bodySchema.parse)

    const result = await generateObject({
      model: chromeai('text'),
      prompt: `Generate a product called: ${body.message}`,
      schema: productSchema,
    })

    return result.object
  })
})
