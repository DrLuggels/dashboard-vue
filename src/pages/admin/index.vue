<script setup lang="ts">
import { ref } from 'vue'

// Reactive data
const message = ref('Willkommen im Admin Panel!')
const stats = ref([
  { label: 'Ministranten', value: 45, icon: 'i-lucide-users', color: 'blue' },
  { label: 'Termine', value: 12, icon: 'i-lucide-calendar', color: 'green' },
  { label: 'Standorte', value: 8, icon: 'i-lucide-map-pin', color: 'orange' },
  { label: 'Aktive Rollen', value: 6, icon: 'i-lucide-shield-check', color: 'purple' }
])

const recentActivities = ref([
  { action: 'Neuer Ministrant hinzugefügt', time: 'vor 2 Stunden', user: 'Admin' },
  { action: 'Termin für Sonntagsmesse erstellt', time: 'vor 4 Stunden', user: 'Pfarrer Müller' },
  { action: 'Berechtigung geändert', time: 'gestern', user: 'Admin' },
  { action: 'Neuer Standort hinzugefügt', time: 'vor 2 Tagen', user: 'Admin' }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Welcome Header -->
    <div class="text-center py-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ message }}</h1>
      <p class="text-gray-600">Verwalten Sie hier alle Aspekte Ihrer Gemeinde</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard 
        v-for="stat in stats" 
        :key="stat.label"
        class="hover:shadow-lg transition-shadow duration-200"
      >
        <div class="flex items-center space-x-3">
          <div :class="`p-2 rounded-lg bg-${stat.color}-100`">
            <UIcon :name="stat.icon" :class="`w-6 h-6 text-${stat.color}-600`" />
          </div>
          <div>
            <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
            <p class="text-sm text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Quick Actions -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">Schnellaktionen</h2>
      </template>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <UButton 
          to="/admin/ministranten"
          variant="outline" 
          block
          class="h-20 flex flex-col items-center justify-center space-y-2"
        >
          <UIcon name="i-lucide-user-plus" class="w-6 h-6" />
          <span>Ministrant hinzufügen</span>
        </UButton>
        
        <UButton 
          to="/admin/termine"
          variant="outline" 
          block
          class="h-20 flex flex-col items-center justify-center space-y-2"
        >
          <UIcon name="i-lucide-calendar-plus" class="w-6 h-6" />
          <span>Neuer Termin</span>
        </UButton>
        
        <UButton 
          to="/admin/standorte"
          variant="outline" 
          block
          class="h-20 flex flex-col items-center justify-center space-y-2"
        >
          <UIcon name="i-lucide-map-pin-plus" class="w-6 h-6" />
          <span>Standort hinzufügen</span>
        </UButton>
        
        <UButton 
          to="/admin/rollen-berechtigungen"
          variant="outline" 
          block
          class="h-20 flex flex-col items-center justify-center space-y-2"
        >
          <UIcon name="i-lucide-shield-plus" class="w-6 h-6" />
          <span>Rolle erstellen</span>
        </UButton>
      </div>
    </UCard>

    <!-- Recent Activities -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">Letzte Aktivitäten</h2>
      </template>
      
      <div class="space-y-4">
        <div 
          v-for="activity in recentActivities" 
          :key="activity.action"
          class="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900">{{ activity.action }}</p>
            <p class="text-xs text-gray-500">{{ activity.user }} • {{ activity.time }}</p>
          </div>
        </div>
      </div>
    </UCard>

    <!-- System Status -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">System Status</h2>
      </template>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <span class="text-sm">Datenbank: Online</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <span class="text-sm">Server: Aktiv</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span class="text-sm">Backup: Läuft</span>
        </div>
      </div>
    </UCard>
  </div>
</template>