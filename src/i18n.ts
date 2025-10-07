import { createI18n } from 'vue-i18n'

// Dynamically import all JSON files per locale
function loadLocaleMessages() {
  const locales = ['en', 'kh']
  const messages: Record<string, any> = {}

  locales.forEach((locale) => {
    messages[locale] = {}

    const context = import.meta.glob(`./locales/${locale}/*.json`, { eager: true })
    for (const path in context) {
      // Extract file name without extension
      const key = path.split('/').pop()?.replace('.json', '')
      if (key) {
        messages[locale][key] = (context[path] as any).default
      }
    }
  })

  return messages
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
})

export default i18n
