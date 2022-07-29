import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/notes',
        name: 'notes',
        component: () => import('../views/Notes.vue'),
    },
    {
        path: '/notesdetail',
        name: 'notesdetail',
        component: () => import('../views/NotesDetail.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
