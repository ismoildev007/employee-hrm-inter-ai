import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'
import Notes from '@/app/dashboard/Notes.vue'
import DashboardPage from '@/app/dashboard/DashboardPage.vue'
import Page from "@/components/home/Page.vue";
import Login from "@/app/auth/Login.vue";
import Register from "@/app/auth/Register.vue";
import ResumeAuditPage from "@/app/auth/ResumeAuditPage.vue";
import Onboarding from "@/app/auth/Onboarding.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Page,
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
        {
            path: '/resume-audit',
            name: 'audit',
            component: ResumeAuditPage,
            meta: { requiresAuth: true, headerBack: true },
        },
        {
            path: '/onboarding',
            name: 'onboarding',
            component: Onboarding,
            meta: { requiresAuth: true, headerBack: true },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardLayout,
            meta: { requiresAuth: true, headerBack: true },
            children: [
                {
                    path: '',
                    name: 'dashboard-home',
                    component: DashboardPage
                },
                {
                    path: 'notes',
                    component: () => import('@/app/dashboard/Notes.vue')
                },
                {
                    path: 'mock-interview',
                    component: () => import('@/app/dashboard/MockInterview.vue')
                },
                {
                    path: 'upgrade',
                    component: () => import('@/app/dashboard/Upgrade.vue')
                },
                {
                    path: 'jobs',
                    component: () => import('@/app/dashboard/Jobs.vue')
                },
                {
                    path: 'notifications',
                    component: () => import('@/app/dashboard/Notification.vue')
                },
                {
                    path: 'profile',
                    component: () => import('@/app/dashboard/Profile.vue')
                },
            ]
        }
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
