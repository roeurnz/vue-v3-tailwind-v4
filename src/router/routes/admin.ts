import Dashboard from '@/pages/admin/Dashboard.vue';
import Users from '@/pages/admin/Users.vue';

const adminRoutes = [
    {
        path: '/admin',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            title: 'Admin Dashboard'
        }
    },
    {
        path: '/admin/users',
        name: 'Users',
        component: Users,
        meta: {
            title: 'User Management'
        }
    },
];

export default adminRoutes;
