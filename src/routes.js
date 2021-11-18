
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import CalculatorPage from './pages/CalculatorPage.vue';
import CalculatedResults from './pages/CalculatedResults.vue';
import TrackerPage from './pages/TrackerPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/calculator', component: CalculatorPage, children: [{ path: 'results', component: CalculatedResults }] },
    { path: '/tracker', component: TrackerPage }
  ]
});



export default router;