<template>
  <header
    class="dropdown-stable fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-primary">Vue App</div>
      <nav class="flex items-center gap-4">
        <router-link to="/" class="hover:text-primary transition-colors">{{ $t('home') }}</router-link>
        <DropdownMenu>
          <DropdownMenuTrigger class="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
            {{ $t('solutions') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>{{ $t('webDevelopment') }}</DropdownMenuItem>
            <DropdownMenuItem>{{ $t('mobileApps') }}</DropdownMenuItem>
            <DropdownMenuItem>{{ $t('cloudServices') }}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger class="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
            {{ $t('tools') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>{{ $t('codeEditor') }}</DropdownMenuItem>
            <DropdownMenuItem>{{ $t('apiTools') }}</DropdownMenuItem>
            <DropdownMenuItem>{{ $t('designTools') }}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/base/LanguageSwitcher.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>
