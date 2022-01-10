import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/RegistrationForm'
import Auth from '../components/AuthorizationForm'
import ToolBar from '../components/ToolBar'


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
    component : ToolBar
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
