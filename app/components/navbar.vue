<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Toner',
    icon: 'i-lucide-book-open',
    to: '/getting-started',
    children: [
      {
        label: 'Add/Remove Toner',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  }
])
</script>

<template>
  <div class="absolute bg-secondary w-full">
    <div class="flex w-full">
      <UNavigationMenu :items="items" title="OpenInventory" class="w-full justify-center" />
    </div>
  </div>
</template>
