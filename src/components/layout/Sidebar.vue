<template>
  <div class="relative">
    <!-- Toggle Button (always visible) -->
    <button @click="toggleCollapse"
      class="fixed right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-l-md shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
      :class="isCollapsed
        ? 'bg-primary text-primary-foreground translate-x-0'
        : 'bg-card text-foreground border border-border -translate-x-16'"
      :title="isCollapsed ? $t('showSidebar') : $t('hideSidebar')">
      <svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        :class="{ 'rotate-180': !isCollapsed }">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>

    <!-- Main Sidebar Container -->
    <aside class="bg-card border-l border-border p-4 transition-all duration-200 ease-in-out z-0 overflow-hidden h-full"
      :class="[
        isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto',
        'w-16'
      ]" style="height: 100vh; transform: translateY(-4rem);">

      <!-- Navigation Content -->
      <nav class="flex-1 space-y-1 p-2 overflow-y-auto" v-if="!isCollapsed">
        <router-link to="/" class="flex flex-col items-center gap-1 px-2 py-3 rounded hover:bg-accent text-xs"
          :title="$t('home')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
        </router-link>
        <router-link to="/solutions" class="flex flex-col items-center gap-1 px-2 py-3 rounded hover:bg-accent text-xs"
          :title="$t('solutions')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
            </path>
          </svg>
        </router-link>
        <router-link to="/tools" class="flex flex-col items-center gap-1 px-2 py-3 rounded hover:bg-accent text-xs"
          :title="$t('tools')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
            </path>
          </svg>
        </router-link>
        <router-link to="/about" class="flex flex-col items-center gap-1 px-2 py-3 rounded hover:bg-accent text-xs"
          :title="$t('about')">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </router-link>
      </nav>

      <!-- Additional Links Section -->
      <div class="mt-8 space-y-1 p-2" v-if="!isCollapsed">
        <a href="#" class="flex flex-col items-center gap-1 px-2 py-2 rounded hover:bg-accent text-xs"
          :title="$t('documentation')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
        </a>
        <a href="#" class="flex flex-col items-center gap-1 px-2 py-2 rounded hover:bg-accent text-xs"
          :title="$t('support')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.344l4.95 4.95M12 2.344v9.192M12 2.344L7.05 7.294M12 21.656l-4.95-4.95M12 21.656v-9.192M12 21.656l4.95-4.95M12 12.536l4.95 4.95M12 12.536l-4.95-4.95">
            </path>
          </svg>
        </a>
        <a href="#" class="flex flex-col items-center gap-1 px-2 py-2 rounded hover:bg-accent text-xs"
          :title="$t('contact')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
        </a>
        <!-- Theme Switcher -->
        <ThemeSwitcher />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ThemeSwitcher from '@/components/base/ThemeSwitcher.vue'

const isCollapsed = ref(false)

// Define emits
const emit = defineEmits<{
  widthChange: [width: number]
}>()

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  console.log('Right sidebar toggled:', isCollapsed.value ? 'collapsed' : 'expanded')
}

// Watch for collapse state changes and emit width changes
watch(isCollapsed, (collapsed) => {
  const width = collapsed ? 0 : 64
  emit('widthChange', width)
}, { immediate: true })
</script>

<style scoped>
/* Page-specific styles if needed */
</style>