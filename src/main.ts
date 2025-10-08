import './assets/css/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'

import App from './App.vue'

const app = createApp(App)

app.use(createRouter({
  routes: [
    { path: '/', component: () => import('./pages/index.vue') },
    {
      path: '/admin',
      component: () => import('./pages/admin.vue'),
      children: [
        { path: '', component: () => import('./pages/admin/index.vue') },
        { path: 'ministranten', component: () => import('./pages/admin/ministranten.vue') },
        { path: 'termine', component: () => import('./pages/admin/termine.vue') },
        { path: 'standorte', component: () => import('./pages/admin/standorte.vue') },
        { path: 'rollen-berechtigungen', component: () => import('./pages/admin/rollen-berechtigungen.vue') },
      ]
    },
    //{path: '/statistics', component: () => import('./pages/statistics.vue') },
    { path: '/inbox', component: () => import('./pages/inbox.vue') },
    { path: '/customers', component: () => import('./pages/customers.vue') },
    {
      path: '/settings',
      component: () => import('./pages/settings.vue'),
      children: [
        { path: '', component: () => import('./pages/settings/index.vue') },
        { path: 'members', component: () => import('./pages/settings/members.vue') },
        { path: 'notifications', component: () => import('./pages/settings/notifications.vue') },
        { path: 'security', component: () => import('./pages/settings/security.vue') },
      ]
    }
  ],
  history: createWebHistory()
}))

app.use(ui)

app.mount('#app')
