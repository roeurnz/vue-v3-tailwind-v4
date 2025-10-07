import { ref, onMounted, onUnmounted, readonly } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const theme = ref<Theme>('system')

  const getEffectiveTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return currentTheme
  }

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    updateDocumentClass(getEffectiveTheme(newTheme))
  }

  const toggleTheme = () => {
    if (theme.value === 'system') {
      setTheme('light')
    } else if (theme.value === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const updateDocumentClass = (effectiveTheme: 'light' | 'dark') => {
    const html = document.documentElement
    if (effectiveTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  onMounted(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system')) {
      theme.value = savedTheme
    } else {
      theme.value = 'system'
    }
    updateDocumentClass(getEffectiveTheme(theme.value))
  })

  // Watch for system preference changes
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme.value === 'system') {
        updateDocumentClass(getEffectiveTheme('system'))
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  })

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme
  }
}