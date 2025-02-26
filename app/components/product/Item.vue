<script setup lang="ts">
import type { ProductSchema } from '~~/schemas/product'
import { Card, CardContent } from '@/components/ui/card'
import { Star, XCircle } from 'lucide-vue-next'

interface Props {
  product: ProductSchema
}

defineProps<Props>()
</script>

<template>
  <Card
    :class="{
      'border-red-200 dark:border-red-800': product.status === 'DISCONTINUED',
    }"
    class="group relative overflow-hidden transition-all hover:shadow-md dark:hover:shadow-slate-900/30"
  >
    <!-- Product Image -->
    <div class="relative">
      <img
        :src="product.imageSrc || 'https://placehold.co/400x400?text=No+Image'"
        :alt="product.name"
        class="aspect-square w-full object-cover group-hover:opacity-75 transition-opacity"
      >
      <div
        v-if="product.status === 'DISCONTINUED'"
        class="absolute top-2 right-2 bg-red-500 text-white dark:bg-red-700 px-2 py-1 text-xs rounded"
      >
        Discontinued
      </div>
    </div>

    <CardContent class="p-4">
      <h3 class="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-50">
        <a :href="`/products/${product.id}`" class="hover:underline">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </a>
      </h3>

      <!-- Rating -->
      <div class="flex items-center mb-2">
        <div class="flex">
          <Star
            v-for="rating in 5"
            :key="rating"
            class="w-4 h-4" :class="[
              product.rating && product.rating >= rating ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700',
            ]"
            fill="currentColor"
          />
        </div>
        <p v-if="product.reviewCount" class="ml-2 text-xs text-slate-500 dark:text-slate-400">
          {{ product.reviewCount }} reviews
        </p>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
        {{ product.description }}
      </p>

      <div class="space-y-1 text-sm">
        <p class="flex justify-between">
          <span class="text-slate-500 dark:text-slate-400">Price:</span>
          <span class="font-medium text-base text-slate-900 dark:text-white">
            ${{ product.price }}
          </span>
        </p>
        <p class="flex justify-between">
          <span class="text-slate-500 dark:text-slate-400">Stock Status:</span>
          <span v-if="product.inStock" class="font-medium text-green-600 dark:text-green-400">In Stock</span>
          <span v-else class="font-medium text-red-500 dark:text-red-400 flex items-center gap-1">
            <XCircle class="w-4 h-4" />
            Out of Stock
          </span>
        </p>
        <p v-if="product.inStock" class="flex justify-between">
          <span class="text-slate-500 dark:text-slate-400">Total:</span>
          <span class="font-medium text-slate-900 dark:text-white">
            ${{ Number(product.price + 5).toFixed(2) }} ($5 delivery)
          </span>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
