<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
</script>

<template>
  <div>
    <div class="flex flex-col pt-8">
      <header>
        <BaseContainer>
          <NavigationMenu>
            <NavigationMenuList class="flex md:flex-row gap-4 flex-wrap flex-col items-start">
              <NavigationMenuItem>
                <NuxtLink to="/" :class="navigationMenuTriggerStyle()">
                  Example 1: Type Assertions
                </NuxtLink>
              </NavigationMenuItem>
              <NavigationMenuItem as-child>
                <NuxtLink to="/example2" :class="navigationMenuTriggerStyle()">
                  Example 2: Zod Validation
                </NuxtLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NuxtLink to="/example3" :class="navigationMenuTriggerStyle()">
                  Example 3: Zod Form Validation
                </NuxtLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NuxtLink to="/example4" :class="navigationMenuTriggerStyle()">
                  Example 4: Implement AI object generation
                </NuxtLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </BaseContainer>
      </header>
    </div>
    <BaseSection>
      <BaseContainer>
        <slot />
      </BaseContainer>
    </BaseSection>
  </div>
</template>
