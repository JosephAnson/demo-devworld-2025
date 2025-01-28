<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
</script>

<template>
  <div>
    <div class="flex flex-col pt-8">
      <header>
        <BaseContainer>
          <NavigationMenu>
            <NavigationMenuList class="flex flex-row gap-4">
              <NavigationMenuItem>
                <NuxtLink to="/">
                  <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                    Example 1: Type Assertions
                  </NavigationMenuLink>
                </NuxtLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NuxtLink to="/example2">
                  <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                    Example 2: Zod Validation
                  </NavigationMenuLink>
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
