<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type ProductSchema } from '~~/schemas/product';

interface Props {
  products: ProductSchema[]
}

defineProps<Props>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Current Products</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </CardContent>
  </Card>
</template>
