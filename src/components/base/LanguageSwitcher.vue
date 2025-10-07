<template>
  <Select :model-value="locale" @update:model-value="(value) => setLocale(value as Locale)">
    <SelectTrigger class="w-[80px]">
      <SelectValue>
        <span :class="`fi fi-${locale === 'en' ? 'us' : 'kh'}`"></span>
      </SelectValue>
    </SelectTrigger>
    <SelectContent side="bottom" align="end">
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
</script>
