<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { XCircle } from 'lucide-vue-next';
import type { ProductSchema } from '~~/schemas/product';

interface Props {
  product: ProductSchema
}

defineProps<Props>()
</script>

<template>
  <Card :class="{'border !border-red-200': product.productStatus === 'DISCONTINUED'}">
    <CardContent class="p-4">
      <h3 class="text-lg font-semibold mb-2">
        {{ product.name }}
      </h3>
      <div class="space-y-1 text-sm">
        <p class="flex justify-between">
          <span class="text-muted-foreground">Price:</span>
          <span class="font-medium">
            ${{ product.price }}
          </span>
        </p>
        <p class="flex justify-between">
          <span class="text-muted-foreground">Stock Status:</span>
          <span v-if="product.inStock" class="font-medium">In Stock</span>
          <span v-else class="font-medium text-red-300 flex items-center gap-1">
            <XCircle class="w-4 h-4" />
            Out of Stock
          </span>
        </p>
        <p class="flex justify-between">
          <span class="text-muted-foreground">Availability:</span>
          <span v-if="product.productStatus === 'AVAILABLE'" class="font-medium">Available</span>
          <span v-else-if="product.productStatus === 'DISCONTINUED'" class="font-medium text-red-300">Unavailable</span>
          <span v-else class="font-medium">Unknown</span>
        </p>
        <p class="flex justify-between">
          <span class="text-muted-foreground">Total:</span>
          <span class="font-medium">
            ${{ product.price + 5 }} ($5 delivery)
          </span>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
