<template>
  <button @click="toggleTheme"
    class="flex flex-col items-center gap-1 px-2 py-2 rounded hover:bg-accent text-xs w-full transition-colors"
    :title="getCurrentThemeLabel()">
    <component :is="getCurrentThemeIcon()" class="w-4 h-4" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

const getCurrentThemeLabel = () => {
  switch (theme.value) {
    case 'light': return 'Light Theme (click to switch)'
    case 'dark': return 'Dark Theme (click to switch)'
    case 'system': return 'System Theme (click to switch)'
    default: return 'Switch Theme'
  }
}

const getCurrentThemeIcon = () => {
  switch (theme.value) {
    case 'light': return Sun
    case 'dark': return Moon
    case 'system': return Monitor
    default: return Sun
  }
}
</script>
