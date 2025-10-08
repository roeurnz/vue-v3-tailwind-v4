<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
</script>