import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// import das views
import CharactersView from './views/Characters/CharactersView.vue'
import DashboardView from './views/Home/DashboardView.vue'
// import RacesView from '../views/RacesView.vue'
// import GenealogiesView from '../views/GenealogiesView.vue'
// import MapView from '../views/MapView.vue'
// import TimelineView from '../views/TimelineView.vue'
// import FactsView from '../views/FactsView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: DashboardView },
  { path: '/characters', name: 'characters', component: CharactersView },
  // { path: '/races', name: 'races', component: RacesView },
  // { path: '/genealogies', name: 'genealogies', component: GenealogiesView },
  // { path: '/map', name: 'map', component: MapView },
  // { path: '/timeline', name: 'timeline', component: TimelineView },
  // { path: '/facts', name: 'facts', component: FactsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
