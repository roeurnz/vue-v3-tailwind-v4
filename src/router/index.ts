import { createRouter, createWebHistory } from 'vue-router';
import publicRoutes from './routes/public';
import adminRoutes from './routes/admin';

const routes = [...publicRoutes, ...adminRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update page title based on meta
router.afterEach((to) => {
  document.title = to.meta.title as string;
});

export default router;
