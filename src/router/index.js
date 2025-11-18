import {createRouter, createWebHistory} from 'vue-router'

import Page from '../app/Page.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Page,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
