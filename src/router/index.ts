import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AllListPage from '../views/myShopList/AllList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:name/:age',
    alias : '/about-us',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/allList',
    name : 'allList',
    component : AllListPage
  },
  {
    path : '/:pathMatch(.*)*',
    component : ()=>import('../views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
