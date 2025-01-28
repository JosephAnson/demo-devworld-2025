<script setup lang="ts">
import { AutoForm } from '@/components/ui/auto-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { h } from 'vue'
import { toast } from '~/components/ui/toast'
import { type UpdateProductSchema, updateProductSchema } from '~~/server/schemas/product'

// Type-safe with Zod validation
const { data: response } = await useLazyFetch('/api/example2')

function onSubmit(values: UpdateProductSchema) {
  toast({
    title: 'Product Added',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })

}
</script>

<template>
  <BaseSection>
    <Card  class="mb-8">
      <CardHeader>
        <CardTitle>Example 3: Zod Schema Validation</CardTitle>
        <CardDescription class="text-green-500">
          ✅ This example uses Zod for runtime validation with AutoForm
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-8">
        <!-- Add Product Form -->
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <AutoForm
              :schema="updateProductSchema"
              :field-config="{
                name: {
                  description: 'Enter the product name',
                },
                price: {
                  description: 'Enter the product price',
                  inputProps: {
                    min: 0,
                    step: 0.01,
                  },
                },
                inStock: {
                  component: 'switch',
                  description: 'Is this product in stock?',
                },
              }"
              class="space-y-6"
              @submit="onSubmit"
            >
            <Button type="submit">
                Submit
              </Button>
            </AutoForm> 
          </CardContent>
        </Card>

        <!-- Product List -->
        <ProductList v-if="response?.success" :products="response?.data?.products" />
      </CardContent>
    </Card>
    <div v-if="response?.error">
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <pre class="text-red-200 text-xs">Error: {{ response.error }}</pre>
        </CardContent>
      </Card>
    </div>
  </BaseSection>
</template>
