import { createRouter, createWebHistory } from 'vue-router';
import Viewer from './views/Viewer.vue';
const Controller = () => import('./views/Controller.vue');
const NotFound = () => import('./views/NotFound.vue');


export const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Viewer
    },
    {
      path: '/controller',
      component: Controller
    },
    {
      path: '/:path(.*)',
      component: NotFound
    },
  ]
});
