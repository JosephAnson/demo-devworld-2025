<script setup lang="ts">
import type { ProductSchema } from '~~/schemas/product'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Unsafe type assertion example
const { data: products } = await useLazyFetch<ProductSchema[]>('/api/example1')
</script>

<template>
  <BaseSection>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Example 1: Unsafe Type Assertions</CardTitle>
        <CardDescription class="dark:text-red-300">
          ⚠️ This example uses unsafe type assertions with 'as'
        </CardDescription>
      </CardHeader>
      <CardContent v-if="products" class="space-y-4">
        <ProductList :products="products" />
      </CardContent>
    </Card>
  </BaseSection>
</template>
