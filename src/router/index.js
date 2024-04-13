// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import BookList from '@/components/BookList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import LoginView from '@/views/LoginPage.vue';

const routes = [
  { path: '/', redirect: '/login' }, 
  { path: '/books', component: BookList, meta: { requiresAuth: true } },
  { path: '/cart', component: ShoppingCart, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
