<script setup lang="ts">
import type { Product } from '~~/server/schemas/product'
import { AutoForm } from '@/components/ui/auto-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { h } from 'vue'
import { ProductSchema } from '~~/server/schemas/product'
import { toast } from '~/components/ui/toast'

// Type-safe with Zod validation
const { data: response } = await useLazyFetch('/api/example2')

// Watch for API errors
watch(response, (newResponse) => {
  if (newResponse.error) {
    toast({
      title: 'Error',
      description: newResponse.error.message || 'Failed to fetch products',
      variant: 'destructive',
    })
  }
})

const products = computed(() => response.value?.data?.products || [])

function onSubmit(values: Product) {
  toast({
    title: 'Product Added',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
}
</script>

<template>
  <BaseSection>
    <Card v-if="response.success" class="mb-8">
      <CardHeader>
        <CardTitle>Example 2: Zod Schema Validation</CardTitle>
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
              :schema="ProductSchema"
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
            />
          </CardContent>
        </Card>

        <!-- Product List -->
        <ProductList :products="products" />
      </CardContent>
    </Card>
    <div v-else>
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
