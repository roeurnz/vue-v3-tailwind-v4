<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <div class="flex">
      <LeftSidebar />
      <main class="flex-1">
        <router-view />
      </main>
      <Sidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import LeftSidebar from '@/components/layout/LeftSidebar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>