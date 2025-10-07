import { onMounted, readonly } from 'vue'
import { useI18n } from 'vue-i18n'

type Locale = 'en' | 'kh'

export function useLocale() {
  const { locale } = useI18n()

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
    // Set lang attribute on html
    document.documentElement.lang = newLocale
  }

  const toggleLocale = () => {
    setLocale(locale.value === 'en' ? 'kh' : 'en')
  }

  onMounted(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'kh')) {
      setLocale(savedLocale)
    } else {
      // Default to 'en' or detect browser language
      const browserLang = navigator.language.split('-')[0]
      const defaultLocale = browserLang === 'km' ? 'kh' : 'en'
      setLocale(defaultLocale)
    }
  })

  return {
    locale: readonly(locale),
    setLocale,
    toggleLocale
  }
}