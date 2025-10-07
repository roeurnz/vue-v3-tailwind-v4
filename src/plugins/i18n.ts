import { createI18n } from 'vue-i18n'

// Load all JSON files statically
function loadLocaleMessages() {
  const locales = ['en', 'kh']
  const messages: Record<string, any> = {}

  const context = import.meta.glob('./locales/**/*.json', { eager: true })

  locales.forEach((locale) => {
    messages[locale] = {}

    for (const path in context) {
      if (path.includes(`/${locale}/`)) {
        const key = path.split('/').pop()?.replace('.json', '')
        if (key) {
          messages[locale][key] = (context[path] as any).default
        }
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
