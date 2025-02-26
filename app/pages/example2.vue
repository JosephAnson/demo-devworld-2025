<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Type-safe with Zod validation
const { data: response } = await useLazyFetch('/api/example2')
</script>

<template>
  <BaseSection>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Example 2: Zod Schema Validation</CardTitle>
        <CardDescription class="text-green-500">
          ✅ This example uses Zod for api validation
        </CardDescription>
      </CardHeader>
      <CardContent v-if="response?.success" class="space-y-8">
        <!-- Product List -->
        <ProductList :products="response.data" />
      </CardContent>
      <div v-else>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <pre class="text-red-700 dark:text-red-300 text-xs">Error: {{ response?.error }}</pre>
        </CardContent>
      </div>
    </Card>
  </BaseSection>
</template>
