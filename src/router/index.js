import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/loginForms/Registration'
import Auth from '../components/loginForms/Authorization'
import MainGamePage from '../components/MainGamePage.vue'


const routes = [
  { 
    path: '/', 
    redirect: '/login'
  },
  {
    path: '/login',
    component : Auth
  },
  {
    path: '/register',
    component : Register
  },
  {
    path: '/game',
    component : MainGamePage
  },
  // {
  //   path: '*'
  // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
