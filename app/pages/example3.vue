<script setup lang="ts">
import type { InferModel } from 'drizzle-orm'
import type { products } from '~~/server/db/schema'
import { AutoForm } from '@/components/ui/auto-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/toast'
import { h } from 'vue'
import { CreateProductSchema } from '~~/server/schemas/product'

type ProductType = InferModel<typeof products>

const { data: response } = await useFetch('/api/example3')
const productList = computed(() => response.value?.data?.products || [])

async function onSubmit(values: ProductType) {
  try {
    const response = await $fetch('/api/example3', {
      method: 'POST',
      body: values,
    })

    if (response.success) {
      toast({
        title: 'Success',
        description: 'Product added successfully',
        variant: 'default',
      })

      // Refresh the product list
      const newData = await $fetch('/api/example3')
      if (newData.success) {
        response.value = newData
      }
    }
    else {
      toast({
        title: 'Error',
        description: response.error?.message || 'Failed to add product',
        variant: 'destructive',
      })
    }
  }
  catch (error) {
    toast({
      title: 'Error',
      description: error instanceof Error ? error.message : 'Failed to add product',
      variant: 'destructive',
    })
  }
}
</script>

<template>
  <BaseSection>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Example 3: End-to-End Type Safety with Drizzle</CardTitle>
        <CardDescription class="text-green-500">
          ✅ This example uses Drizzle for end-to-end type safety with AutoForm
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
              :schema="CreateProductSchema"
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
        <Card>
          <CardHeader>
            <CardTitle>Current Products</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div v-for="product in productList" :key="product.id" class="border rounded p-4">
              <h3>{{ product.name }}</h3>
              <p>Price: ${{ product.price }}</p>
              <p>In Stock: {{ product.inStock ? 'Yes' : 'No' }}</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </BaseSection>
</template>
