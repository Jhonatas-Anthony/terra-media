<script setup lang="ts">
import characters from '../../data/characters.json'
</script>

<template>
  <section>
    <h2>Personagens</h2>
    <ul>
      <li v-for="c in characters" :key="c.id">
        <h3>{{ c.name }}</h3>
        <p><strong>Raça:</strong> {{ c.race }}</p>
        <p><strong>Era:</strong> {{ c.era }}</p>
        <p>{{ c.biography }}</p>
      </li>
    </ul>
  </section>
</template>
