<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const links = [[{
  label: 'Ministranten',
  icon: 'i-lucide-users',
  to: '/admin/ministranten',
  exact: true
}, {
  label: 'Termine',
  icon: 'i-lucide-calendar',
  to: '/admin/termine'
}, {
  label: 'Standorte',
  icon: 'i-lucide-map-pin',
  to: '/admin/standorte'
}, {
  label: 'Rollen & Berechtigungen',
  icon: 'i-lucide-shield-check',
  to: '/admin/rollen-berechtigungen'
}], [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: 'https://ui.nuxt.com/docs/getting-started/installation/vue',
  target: '_blank'
}]] satisfies NavigationMenuItem[][]
</script>
<template>
  <UDashboardPanel id="admin" :ui="{ body: 'lg:py-12' }">
    <template #header>
      <UDashboardNavbar title="Admin Panel">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <!-- NOTE: The `-mx-1` class is used to align with the `DashboardSidebarCollapse` button here. -->
        <UNavigationMenu :items="links" highlight class="-mx-1 flex-1" />
      </UDashboardToolbar>
    </template>

    <template #body>
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto">
        <RouterView />
      </div>
    </template>
  </UDashboardPanel>
</template>