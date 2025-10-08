r<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <div class="relative h-[calc(100vh-4rem)]">
      <!-- CSS Variables for dynamic sidebar widths -->
      <div class="contents" :style="{
        '--left-sidebar-width': leftSidebarWidth + 'px',
        '--right-sidebar-width': rightSidebarWidth + 'px'
      }">
        <!-- Fixed Left Sidebar -->
        <div class="fixed left-0 top-16 z-20" :style="{ width: leftSidebarWidth + 'px', height: 'calc(100vh - 4rem)' }">
          <LeftSidebar @width-change="handleLeftSidebarWidthChange" />
        </div>

        <!-- Main Content Area (dynamically adjusted for sidebars) -->
        <main class="flex-1 fixed z-10 min-w-0 transition-all duration-200 ease-in-out" :style="{
          top: '4rem',
          left: leftSidebarWidth + 'px',
          right: rightSidebarWidth + 'px',
          bottom: '0'
        }">
          <div class="h-full overflow-auto">
            <router-view />
          </div>
        </main>

        <!-- Fixed Right Sidebar -->
        <div class="fixed right-0 top-16 z-20"
          :style="{ width: rightSidebarWidth + 'px', height: 'calc(100vh - 4rem)' }">
          <Sidebar @width-change="handleRightSidebarWidthChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import LeftSidebar from '@/components/layout/LeftSidebar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'

// Reactive sidebar widths
const leftSidebarWidth = ref(256) // Default width for left sidebar
const rightSidebarWidth = ref(64)  // Default width for right sidebar

// Event handlers for sidebar width changes
const handleLeftSidebarWidthChange = (width: number) => {
  leftSidebarWidth.value = width
}

const handleRightSidebarWidthChange = (width: number) => {
  rightSidebarWidth.value = width
}
</script>