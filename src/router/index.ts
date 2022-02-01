import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'WelcomePage',
    component: () => import('../views/WelcomePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to?.meta?.requiresAuth) {
    if (store?.state.user !== null) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

export default router
