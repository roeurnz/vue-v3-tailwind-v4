<template>
  <header
    class="dropdown-stable fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-primary">Vue App</div>
      <nav class="flex items-center gap-4">
        <router-link to="/" class="hover:text-primary transition-colors">{{ $t('home') }}</router-link>
        <SolutionsDropdown />
        <ToolsDropdown />
      </nav>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/base/LanguageSwitcher.vue'
import SolutionsDropdown from '@/components/layout/SolutionsDropdown.vue'
import ToolsDropdown from '@/components/layout/ToolsDropdown.vue'
</script>
