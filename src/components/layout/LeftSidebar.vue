<template>
  <aside
    class="bg-card border-r border-border p-4 transition-all duration-200 ease-in-out z-0 overflow-hidden h-full"
    :class="[
      draggedWidth === 0 ? 'w-0 overflow-hidden' : (isCollapsed ? 'w-16' : 'w-64'),
      { 'select-none': isResizing }
    ]"
    :style="draggedWidth === 0 ? { width: '0px', padding: '0px' } : { width: draggedWidth + 'px' }"
  >
    <!-- Header with Toggle Menu -->
    <div class="flex items-center justify-between mb-4 transition-all duration-300 ease-in-out"
         :class="draggedWidth < 200 ? 'opacity-60' : 'opacity-100'"
         v-if="!isCollapsed && draggedWidth > 0">
      <h3 class="text-sm font-medium transition-all duration-200"
          :class="draggedWidth < 150 ? 'text-xs' : 'text-sm'">
        {{ $t('mail') }}
      </h3>
      <DropdownMenu>
        <DropdownMenuTrigger class="p-1 hover:bg-accent rounded">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="toggleAppsPane" v-if="!hideApps">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
            </svg>
            {{ $t('hideAppsPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleAppsPane" v-if="hideApps">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            {{ $t('showAppsPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleFoldersPane" v-if="!hideFolders">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
            </svg>
            {{ $t('hideFoldersPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleFoldersPane" v-if="hideFolders">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ $t('showFoldersPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleAll">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
            </svg>
            {{ hideApps && hideFolders ? $t('showAll') : $t('hideAll') }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <!-- Collapsed Header -->
    <div class="flex justify-center mb-4 transition-all duration-300 ease-in-out"
         :class="isResizing ? 'scale-110' : 'scale-100'"
         v-if="isCollapsed && draggedWidth > 0">
      <DropdownMenu>
        <DropdownMenuTrigger class="p-2 hover:bg-accent rounded">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="toggleAppsPane" v-if="!hideApps">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
            </svg>
            {{ $t('hideAppsPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleAppsPane" v-if="hideApps">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            {{ $t('showAppsPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleFoldersPane" v-if="!hideFolders">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
            </svg>
            {{ $t('hideFoldersPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleFoldersPane" v-if="hideFolders">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ $t('showFoldersPane') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="toggleAll">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
            </svg>
            {{ hideApps && hideFolders ? $t('showAll') : $t('hideAll') }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <!-- Resize Handle -->
     <div
       class="absolute right-0 top-0 bottom-0 w-0.5 cursor-col-resize transition-all duration-200 z-20 hover:w-1"
       :class="[
         isResizing
           ? 'bg-primary w-1.5'
           : 'bg-border hover:bg-primary'
       ]"
       @mousedown="startResize"
       @dblclick="toggleCollapse"
     ></div>

    <!-- Resize Width Indicator -->
    <div
      v-if="isResizing && draggedWidth > 64"
      class="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded shadow-lg z-30 transition-all duration-100"
    >
      {{ Math.round(draggedWidth) }}px
    </div>

    <!-- Floating Expand Button (when completely hidden) -->
    <div
      v-if="draggedWidth === 0"
      class="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
    >
      <button
        @click="restoreSidebar"
        class="bg-primary text-primary-foreground p-2 rounded-r-md shadow-lg hover:bg-primary/90 transition-colors"
        :title="$t('showSidebar')"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <!-- Apps Pane (Main Navigation) -->
    <nav class="space-y-1" v-if="!hideApps && draggedWidth > 0">
      <router-link
        to="/"
        class="flex items-center rounded hover:bg-accent text-sm transition-all duration-200"
        :class="getMenuItemClasses()"
        :title="isCollapsed ? $t('inbox') : ''"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
        </svg>
        <span v-if="!isCollapsed" class="truncate">{{ $t('inbox') }}</span>
      </router-link>
      <router-link
        to="/solutions"
        class="flex items-center rounded hover:bg-accent text-sm transition-all duration-200"
        :class="getMenuItemClasses()"
        :title="isCollapsed ? $t('sent') : ''"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        <span v-if="!isCollapsed" class="truncate">{{ $t('sent') }}</span>
      </router-link>
      <router-link
        to="/tools"
        class="flex items-center rounded hover:bg-accent text-sm transition-all duration-200"
        :class="getMenuItemClasses()"
        :title="isCollapsed ? $t('drafts') : ''"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        <span v-if="!isCollapsed" class="truncate">{{ $t('drafts') }}</span>
      </router-link>
      <router-link
        to="/about"
        class="flex items-center rounded hover:bg-accent text-sm transition-all duration-200"
        :class="getMenuItemClasses()"
        :title="isCollapsed ? $t('trash') : ''"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        <span v-if="!isCollapsed" class="truncate">{{ $t('trash') }}</span>
      </router-link>
    </nav>

    <!-- Folders Pane (Labels Section) -->
    <div class="mt-8 transition-all duration-300 ease-in-out" v-if="!hideFolders && !isCollapsed && draggedWidth > 0">
      <h4 class="text-sm font-medium mb-2 text-muted-foreground transition-opacity duration-200"
          :class="draggedWidth < 150 ? 'opacity-0' : 'opacity-100'">
        {{ $t('labels') }}
      </h4>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 rounded px-1 py-1 hover:bg-accent/50"
               :class="draggedWidth < 120 ? 'justify-center px-1' : 'justify-start px-2'">
          <div class="w-3 h-3 bg-red-500 rounded flex-shrink-0"></div>
          <span v-if="draggedWidth >= 120" class="truncate">{{ $t('work') }}</span></a></li>
        <li><a href="#" class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 rounded px-1 py-1 hover:bg-accent/50"
               :class="draggedWidth < 120 ? 'justify-center px-1' : 'justify-start px-2'">
          <div class="w-3 h-3 bg-blue-500 rounded flex-shrink-0"></div>
          <span v-if="draggedWidth >= 120" class="truncate">{{ $t('personal') }}</span></a></li>
        <li><a href="#" class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-200 rounded px-1 py-1 hover:bg-accent/50"
               :class="draggedWidth < 120 ? 'justify-center px-1' : 'justify-start px-2'">
          <div class="w-3 h-3 bg-green-500 rounded flex-shrink-0"></div>
          <span v-if="draggedWidth >= 120" class="truncate">{{ $t('important') }}</span></a></li>
      </ul>
    </div>
  </aside>

  <!-- Floating Expand Button (when completely hidden) -->
  <div
    v-if="draggedWidth === 0"
    class="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
  >
    <button
      @click="restoreSidebar"
      class="bg-primary text-primary-foreground p-2 rounded-r-md shadow-lg hover:bg-primary/90 transition-colors"
      :title="$t('showSidebar')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Define emits
const emit = defineEmits<{
  widthChange: [width: number]
}>()

const isCollapsed = ref(false)
const draggedWidth = ref(256) // Default width
const isResizing = ref(false)
const hideApps = ref(false)
const hideFolders = ref(false)
let startX = 0
let startWidth = 0

const startResize = (e: MouseEvent) => {
  isResizing.value = true
  startX = e.clientX
  startWidth = draggedWidth.value

  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  document.body.style.cursor = 'col-resize'
  document.body.style.userSelect = 'none'
}

const handleResize = (e: MouseEvent) => {
  if (!isResizing.value) return

  const diff = e.clientX - startX
  const newWidth = Math.max(64, Math.min(400, startWidth + diff)) // Min 64px (same as right sidebar), Max 400px
  draggedWidth.value = newWidth

  // Auto-collapse if width gets too small (less than 80px for comfortable icon display)
  // or at minimum width (64px) to match right sidebar behavior
  if (newWidth <= 80) {
    isCollapsed.value = true
  } else {
    isCollapsed.value = false
  }
}

const stopResize = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  if (isCollapsed.value) {
    draggedWidth.value = 0 // Complete hide
  } else {
    draggedWidth.value = 256 // Default expanded width
  }
}

// Toggle functions for Zoho-style pane hiding
const toggleAppsPane = () => {
  hideApps.value = !hideApps.value
  console.log('Apps pane toggled:', !hideApps.value)
}

const toggleFoldersPane = () => {
  hideFolders.value = !hideFolders.value
  console.log('Folders pane toggled:', !hideFolders.value)
}

const toggleAll = () => {
  // Check if both panes are currently hidden
  const bothHidden = hideApps.value && hideFolders.value

  if (bothHidden) {
    // If both are hidden, show them
    hideApps.value = false
    hideFolders.value = false
    draggedWidth.value = 256
    isCollapsed.value = false
    console.log('Showing all panes')
  } else {
    // If at least one is visible, hide everything
    hideApps.value = true
    hideFolders.value = true
    draggedWidth.value = 0
    isCollapsed.value = true
    console.log('Hiding all panes and collapsing sidebar')
  }
}

// Restore sidebar from completely hidden state
const restoreSidebar = () => {
  draggedWidth.value = 256 // Restore to default width
  isCollapsed.value = false
  hideApps.value = false // Show apps pane
  hideFolders.value = false // Show folders pane
  console.log('Sidebar restored')
}

// Get responsive menu item classes based on sidebar width
const getMenuItemClasses = () => {
  const width = draggedWidth.value
  if (width <= 80) {
    return 'justify-center px-2 py-3 gap-0'
  } else if (width <= 150) {
    return 'justify-start px-2 py-2 gap-2'
  } else if (width <= 220) {
    return 'justify-start px-3 py-2 gap-3'
  } else {
    return 'justify-start px-4 py-2 gap-3'
  }
}

// Watch for width changes and emit to parent
watch(draggedWidth, (newWidth) => {
  const currentWidth = newWidth > 0 ? newWidth : 0
  emit('widthChange', currentWidth)
}, { immediate: true })

// Cleanup event listeners
onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
/* Page-specific styles if needed */
</style>