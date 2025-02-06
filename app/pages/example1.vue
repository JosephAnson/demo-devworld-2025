<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ProductSchema } from "~~/schemas/product";

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
      <CardContent class="space-y-4" v-if="products">
        <ProductList :products="products" />
      </CardContent>
    </Card>
  </BaseSection>
</template>
