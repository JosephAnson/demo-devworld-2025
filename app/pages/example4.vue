<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateObject } from "ai";
import { chromeai } from "chrome-ai";
import { productSchema, type ProductSchema } from '~~/schemas/product';

const products = ref<ProductSchema[]>([])
const productName = ref('')

async function generateProduct(message: string){
  const result = await generateObject({
    model: chromeai(),
    prompt: `Generate a detailed product called ${message}, make it detailed and interesting. It should be a physical product, not software or a service and fit for a supermarket.`,
    schema: productSchema
  });

  products.value.push(result.object)
  productName.value = ""

  console.log('or', result.object)
}


</script>

<template>
  <BaseSection>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Example 4: Generate using AI</CardTitle>
        <CardDescription class="text-green-500">
          ✅ This example uses Zod for runtime validation with AutoForm
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <Label for="product-name">Product Name</Label>
              <Input id="product-name" v-model="productName" />

              <Button @click="generateProduct(productName)">
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        <!-- Product List -->
        <ProductList v-if="products" :products="products" />
      </CardContent>
    </Card>

  </BaseSection>


  <p>
      How to enable chrome ai in browser: <a href="https://docs.google.com/document/u/0/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/mobilebasic#h.pghp86scw27"> here  </a>
    </p>

</template>
