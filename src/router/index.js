import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // Define your routes here
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  // Add more routes as needed
];

const router = new VueRouter({
  mode: 'history', // Optional: Use 'history' mode or 'hash' mode
  base: process.env.BASE_URL,
  routes,
});

export default router;
