<template>
  <div
    class="bg-background border border-gray-300 dark:border-blue-400 rounded-[22px] flex p-1  justify-around items-center">
    <button @click="setTheme('light')" :class="[
      'flex items-center justify-center w-7 h-7 rounded-[24px] transition-colors duration-200 bg-transparent theme-btn',
      theme === 'light' ? 'active bg-violet-500 text-white' : ''
    ]">
      <Sun class="h-4 w-4" />
    </button>
    <button @click="setTheme('dark')" :class="[
      'flex items-center justify-center w-7 h-7 rounded-[24px] transition-colors duration-200 bg-transparent theme-btn',
      theme === 'dark' ? 'active bg-violet-500 text-gray-50' : ''
    ]">
      <Moon class="h-4 w-4" />
    </button>
    <button @click="setTheme('system')" :class="[
      'flex items-center justify-center w-7 h-7 rounded-[24px] transition-colors duration-200 bg-transparent theme-btn',
      theme === 'system' ? 'active bg-violet-500 text-white' : ''
    ]">
      <Monitor class="h-4 w-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, setTheme } = useTheme()
</script>
