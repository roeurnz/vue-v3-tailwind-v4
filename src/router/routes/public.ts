import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Login from '@/pages/Auth/Login.vue';
import Register from '@/pages/Auth/Register.vue';

const publicRoutes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    title: 'Home'
                }
            },
            {
                path: 'about',
                name: 'About',
                component: About,
                meta: {
                    title: 'About Us'
                }
            },
            {
                path: 'login',
                name: 'Login',
                component: Login,
                meta: {
                    title: 'Login'
                }
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
                meta: {
                    title: 'Register'
                }
            },
        ]
    },
];

export default publicRoutes;
