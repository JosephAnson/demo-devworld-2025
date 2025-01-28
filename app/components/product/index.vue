<script setup lang="ts">
import type { Product } from '~/server/schemas/product'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <Card>
    <CardContent class="p-4">
      <h3 class="text-lg font-semibold mb-2">
        {{ product.name }}
      </h3>
      <div class="space-y-1 text-sm">
        <p class="flex justify-between">
          <span class="text-muted-foreground">Price:</span>
          <span class="font-medium">${{ product.price }}</span>
        </p>
        <p class="flex justify-between">
          <span class="text-muted-foreground">Stock Status:</span>
          <span class="font-medium">{{ product.inStock ? 'In Stock' : 'Out of Stock' }}</span>
        </p>
        <p class="flex justify-between">
          <span class="text-muted-foreground">Availability:</span>
          <span v-if="product.available === 'AVAILABLE'" class="font-medium">Available</span>
          <span v-else-if="product.available === 'DISCONTINUED'" class="font-medium">Unavailable</span>
          <span v-else class="font-medium">Unknown</span>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
