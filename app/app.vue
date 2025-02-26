<script lang="ts" setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
import { ConfigProvider } from 'radix-vue'

const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div class="header flex justify-between items-center p-4">
      <div class="logo">
        Dev World 2025 - Joseph Anson
      </div>
      <BaseThemeToggle />
    </div>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </ConfigProvider>
  <Toaster />
</template>
