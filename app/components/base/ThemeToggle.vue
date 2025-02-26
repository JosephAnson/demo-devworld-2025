<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import { Laptop, Moon, Sun } from 'lucide-vue-next'
import { computed } from 'vue'

// Use the composable provided by the color-mode module
const colorMode = useColorMode()

// Compute the current mode display name for accessibility
const currentMode = computed(() => {
  if (colorMode.preference === 'system') {
    return colorMode.value === 'dark' ? 'System (Dark)' : 'System (Light)'
  }
  return colorMode.preference.charAt(0).toUpperCase() + colorMode.preference.slice(1)
})

// Compute if dark mode is active (for the switch)
const isDarkMode = computed(() => {
  return colorMode.value === 'dark'
})

// Toggle between light and dark modes
function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

// Cycle through all modes (light, dark, system)
function cycleMode() {
  const modes = ['light', 'dark', 'system']
  const currentIndex = modes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % modes.length
  colorMode.preference = modes[nextIndex]
}
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- Simple toggle switch (light/dark only) -->
    <div class="flex items-center gap-2">
      <Sun class="h-4 w-4 text-slate-500 dark:text-slate-400" />
      <Switch
        :checked="isDarkMode"
        class="data-[state=checked]:bg-slate-700"
        @update:checked="toggleDarkMode"
      />
      <Moon class="h-4 w-4 text-slate-500 dark:text-slate-400" />
    </div>

    <!-- Or use a button to cycle through all modes -->
    <button
      class="ml-4 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-800"
      aria-label="Toggle color mode"
      @click="cycleMode"
    >
      <Sun v-if="colorMode.preference === 'light'" class="h-4 w-4" />
      <Moon v-else-if="colorMode.preference === 'dark'" class="h-4 w-4" />
      <Laptop v-else class="h-4 w-4" />
      <span>{{ currentMode }}</span>
    </button>
  </div>
</template>

<style>
/* You can add global theme styles here or in your main CSS file */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark-mode {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}

body {
  @apply bg-[hsl(var(--background))] text-[hsl(var(--foreground))];
}
</style>
