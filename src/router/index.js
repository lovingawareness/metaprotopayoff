import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeLinks from '../components/HomeLinks.vue'
import TechnicalBackground from '../components/TechnicalBackground.vue'
import HowItsMade from '../components/HowItsMade.vue'
import LearningResources from '../components/LearningResources.vue'
import AboutThisSite from '../components/AboutThisSite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', name: 'HomeLinks', component: HomeLinks },
      { path: 'background', name: 'TechnicalBackground', component: TechnicalBackground },
      { path: 'howitsmade', name: 'HowItsMade', component: HowItsMade },
      { path: 'learning', name: 'LearningResources', component: LearningResources },
      { path: 'about', name: 'AboutThisSite', component: AboutThisSite },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
