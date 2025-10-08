<template>
  <Select :model-value="locale" @update:model-value="handleSelect" :open="open" @update:open="(val) => open = val">
    <SelectTrigger class="w-[80px] h-9">
      <SelectValue>
        <span :class="`fi fi-${locale === 'en' ? 'us' : 'kh'}`"></span>
      </SelectValue>
      <ChevronDown class="size-3.5 opacity-50 transition-transform duration-200" :class="{ 'rotate-180': open }" />
    </SelectTrigger>
    <SelectContent side="bottom" align="end"
      class="[&_[data-slot=select-scroll-up-button]]:hidden [&_[data-slot=select-scroll-down-button]]:hidden">
      <SelectItem class="font-sans" value="en">
        <span class="fi fi-us"></span> English
      </SelectItem>
      <SelectItem class="font-sans" value="kh">
        <span class="fi fi-kh"></span> Khmer
      </SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Locale = 'en' | 'kh'

const { locale, setLocale } = useLocale()
const open = ref(false)

const handleSelect = (value: any) => {
  if (value) {
    setLocale(value as Locale)
    open.value = false
  }
}
</script>
