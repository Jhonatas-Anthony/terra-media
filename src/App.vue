<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

// Sempre que o idioma mudar, salvar no localStorage
watch(currentLocale, (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
})

/* Temas */
const currentTheme = ref(localStorage.getItem('theme') || 'middle-earth')

watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
})

onMounted(() => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>
<template>
  <div id="app">
    <header>
      <h1 v-on:click="$router.push('/')">{{ $t('header.title') }}</h1>
      <nav>
        <a href="#">{{ $t('header.racas') }}</a>
        <a href="#">{{ $t('header.genealogias') }}</a>
        <a href="#">{{ $t('header.mapa') }}</a>
        <a href="#">{{ $t('header.timeline') }}</a>
        <a href="#">{{ $t('header.fatos') }}</a>
        <router-link to="/characters">{{ $t('header.personagens') }}</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <span>
        <p>&copy; 2025 Terra Média</p>
      </span>
      <span></span>
      <span class="footer-inputs">
        <span class="footer-input-item">
          <label for="locale">Idioma</label>
          <select id="locale" name="locale" v-model="currentLocale">
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </span>
        <span class="footer-input-item">
          <label for="theme">Tema</label>
          <select id="theme" name="theme" v-model="currentTheme">
            <option value="middle-earth">Terra Média</option>
            <option value="dark">Sombrio (Mordor)</option>
            <option value="elven">Élfico</option>
          </select>
        </span>
      </span>
    </footer>
  </div>
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.8rem;
}

nav a {
  margin-left: 1rem;
  color: var(--text-color);
  font-weight: bold;
}

main {
  padding: 2rem;
  min-height: 70vh;
}

footer {
  background-color: var(--secondary-color);
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-inputs {
  display: flex;
}

.footer-input-item {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
