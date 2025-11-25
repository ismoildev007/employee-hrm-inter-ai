import { createRouter, createWebHistory } from 'vue-router'
import Page from "@/app/home/Page.vue";
import Hotel from "@/app/home/Hotel.vue";
import Ticket from "@/app/home/Ticket.vue";
import Login from "@/app/auth/Login.vue";
import Register from "@/app/auth/Register.vue";
import TicketPlanner from "@/app/home/Planner.vue";
import Rent from "@/app/home/Rental.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Page,
        },
        {
            path: '/hotel',
            name: 'hotel',
            component: Hotel,
        },
        {
            path: '/ticket',
            name: 'ticket',
            component: Ticket,
        },
        {
            path: '/rent',
            name: 'rent',
            component: Rent,
        },
        {
            path: '/ticket-planner',
            name: 'TicketPlanner',
            component: TicketPlanner,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        // {
        //     path: '/dashboard',
        //     name: 'dashboard',
        //     component: DashboardLayout,
        //     meta: { requiresAuth: true, headerBack: true },
        //     children: [
        //         {
        //             path: '',
        //             name: 'dashboard-home',
        //             component: DashboardPage
        //         },
        //         {
        //             path: 'notes',
        //             component: () => import('@/app/dashboard/Notes.vue')
        //         },
        //         {
        //             path: 'mock-interview',
        //             component: () => import('@/app/dashboard/MockInterview.vue')
        //         },
        //         {
        //             path: 'upgrade',
        //             component: () => import('@/app/dashboard/Upgrade.vue')
        //         },
        //         {
        //             path: 'jobs',
        //             component: () => import('@/app/dashboard/Jobs.vue')
        //         },
        //         {
        //             path: 'notifications',
        //             component: () => import('@/app/dashboard/Notification.vue')
        //         },
        //         {
        //             path: 'profile',
        //             component: () => import('@/app/dashboard/Profile.vue')
        //         },
        //     ]
        // }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (to.meta.requiresAuth && !token) {
        return next({ name: "home" });
    }

    if (to.meta.guest && token) {
        return next({ name: "dashboard" });
    }

    next();
});

export default router
