import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/BerandaView.vue'
import petaView from '../Views/petaView.vue'
import sistemoperasi from '../Views/sistem-operasi.vue'
import Arsitektur from '../Views/Arsitektur.vue'
import Challenge from '../Views/Challenge.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/petaView',
    name: 'petaView',
    component: petaView
  },
  {
    path:'/sistem-operasi',
    name:'sistem-operasi',
    component: sistemoperasi
  },
  {
    path:'/Arsitektur',
    name:'ArsitekturComponent',
    component: Arsitektur
  },
  {
    path:'/Challenge',
    name:'ChallengeComponent',
    component: Challenge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
