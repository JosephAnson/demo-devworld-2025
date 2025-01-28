<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ProductsResponseSchema } from "~~/server/schemas/product";

// Unsafe type assertion example
const { data: response } = await useLazyFetch<ProductsResponseSchema>('/api/example1')
const products = computed(() => response.value?.products)
</script>

<template>
  <BaseSection>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Example 1: Unsafe Type Assertions</CardTitle>
        <CardDescription class="text-red-500">
          ⚠️ This example uses unsafe type assertions with 'as'
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-4" v-if="products">
        <ProductList :products="products" />
      </CardContent>
    </Card>
  </BaseSection>
</template>
