<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Vue App</h1>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from '@/components/base/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/base/LanguageSwitcher.vue'
</script>