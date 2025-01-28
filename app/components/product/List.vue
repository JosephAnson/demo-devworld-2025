<script setup lang="ts">
import type { Product } from '~/server/schemas/product'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  products: Product[]
}

defineProps<Props>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Current Products</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </CardContent>
  </Card>
</template>
