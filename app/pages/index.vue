<script setup lang="ts">
import type { Product } from '~~/server/api/example1'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Unsafe type assertion example
const { data: response } = await useLazyFetch('/api/example1')
const products = computed(() => response.value?.products as Product[])
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
      <CardContent class="space-y-4">
        <ProductList :products="products" />
      </CardContent>
    </Card>
  </BaseSection>
</template>
