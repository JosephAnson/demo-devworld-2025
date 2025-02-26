<script setup lang="ts">
import type { ProductSchema, UpdateProductSchema } from '~~/schemas/product'
import { updateProductSchema } from '~~/schemas/product'
import { toast } from '~/components/ui/toast'

const products = ref<ProductSchema[]>([])
const idCounter = ref(1)

function onSubmit(values: UpdateProductSchema) {
  toast({
    title: 'Product Added',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })

  products.value.push({ ...values, id: idCounter.value.toString() })
  idCounter.value++
}
</script>

<template>
  <BaseSection>
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Zod Form Creation</CardTitle>
          <CardDescription class="text-green-500">
            ✅ This example uses Zod for runtime validation with AutoForm
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-8">
          <!-- Add Product Form -->
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
            </CardHeader>
            <CardContent>
              <AutoForm
                :schema="updateProductSchema"
                :field-config="{
                  name: {
                    description: 'Enter the product name',
                  },
                  price: {
                    description: 'Enter the product price',
                    inputProps: {
                      min: 0,
                      step: 0.01,
                    },
                  },
                  inStock: {
                    component: 'switch',
                    description: 'Is this product in stock?',
                  },
                }"
                class="space-y-6"
                @submit="onSubmit"
              >
                <Button type="submit">
                  Submit
                </Button>
              </AutoForm>
            </CardContent>
          </Card>

          <!-- Product List -->
          <ProductList :products="products" />
        </CardContent>
      </Card>
    </div>
  </BaseSection>
</template>
