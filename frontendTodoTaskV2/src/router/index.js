import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/MainPage.vue'),
    },
    {
        path: '/notes',
        name: 'notes',
        component: () => import('../views/NotesList.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
