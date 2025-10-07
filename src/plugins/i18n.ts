import { createI18n } from 'vue-i18n'

// Load all JSON files statically
function loadLocaleMessages() {
  const locales = ['en', 'kh']
  const messages: Record<string, any> = {}

  const context = import.meta.glob('../locales/*/*.json', { eager: true })

  locales.forEach((locale) => {
    messages[locale] = {}

    for (const path in context) {
      if (path.includes(`/${locale}/`)) {
        const json = (context[path] as any).default
        Object.assign(messages[locale], json)
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
