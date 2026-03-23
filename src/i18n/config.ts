import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/i18n/locales/en.json'
import es from '@/i18n/locales/es.json'

const STORAGE_KEY = 'iex-lang'

const saved =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY)
    : null

function applyDocumentLang(lng: string) {
  document.documentElement.lang = lng
}

export const i18nInit = i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: saved === 'en' || saved === 'es' ? saved : 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false,
  },
})

applyDocumentLang(i18n.language)

i18n.on('languageChanged', (lng) => {
  applyDocumentLang(lng)
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    /* ignore */
  }
})

export { i18n }
