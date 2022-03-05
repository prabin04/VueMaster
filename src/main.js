import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes // short for `routes: routes`
})
const app = createApp(App)
app.use(router)
app.mount('#app')
