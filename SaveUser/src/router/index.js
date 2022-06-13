import { createRouter, createWebHistory } from 'vue-router';
import AboutUser from '../views/AboutUser.vue';
import AllUser from '../views/AllUser.vue';
import CreateUser from '../views/CreateUser.vue';

const routes = [
    {
        path: '/',
        name: 'AllUser',
        component: AllUser,
    },

    {
        path: '/create-user',
        name: 'CreateUser',
        component: CreateUser,
    },
    {
        path: '/about-user/:id',
        name: 'AboutUser',
        component: AboutUser,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
