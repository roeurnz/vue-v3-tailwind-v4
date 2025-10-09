<template>
    <div class="relative" @mouseleave="closeDropdown">
        <button class="hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
            @mouseenter="openDropdown" :class="{ 'text-primary': isOpen }">
            {{ $t('tools') }}
            <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        <Transition enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 transform -translate-y-2 scale-95"
            enter-to-class="opacity-100 transform translate-y-0 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 transform translate-y-0 scale-100"
            leave-to-class="opacity-0 transform -translate-y-2 scale-95">
            <div v-if="isOpen"
                class="absolute top-full left-0 mt-1 w-48 bg-popover border border-border rounded-md shadow-lg py-1 z-50"
                @mouseenter="keepDropdownOpen" @mouseleave="closeDropdown">
                <a href="#"
                    class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    @click="closeDropdown">
                    {{ $t('codeEditor') }}
                </a>
                <a href="#"
                    class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    @click="closeDropdown">
                    {{ $t('apiTools') }}
                </a>
                <a href="#"
                    class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    @click="closeDropdown">
                    {{ $t('designTools') }}
                </a>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useDropdownHover } from '@/composables/useDropdownHover'

// Use the dropdown hover composable
const { isOpen, openDropdown, closeDropdown, keepDropdownOpen } = useDropdownHover()
</script>