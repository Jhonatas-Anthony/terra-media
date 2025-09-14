import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/fonts.css'
import './assets/styles/themes.css'
import './assets/styles/base.css'

import { createI18n } from 'vue-i18n'

import pt from './locales/pt.json'
import en from './locales/en.json'
import router from './router'

function getBrowserLocale(): string {
  const lang = navigator.language || navigator.languages[0] || 'en'
  if (lang.startsWith('pt')) return 'pt'
  return 'en'
}

// Checar se o usuário já escolheu antes
const savedLocale = localStorage.getItem('locale')
const locale = savedLocale || getBrowserLocale()

const i18n = createI18n({
  legacy: false, // necessário para composition API
  locale,
  fallbackLocale: 'en',
  messages: { pt, en }
})

createApp(App).use(i18n).use(router).mount('#app')
