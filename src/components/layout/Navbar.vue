<template>
  <header class="border-b">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-teal-500">Vue App</div>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from '@/components/base/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/base/LanguageSwitcher.vue'
</script>