import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import DashboardLayout from "@/components/layout/DashboardLayout.vue";
import TrainingCenter from "@/components/training/TrainingCenter.vue";
import CourseDetail from "@/components/training/CourseDetail.vue";
import LessonDetail from "@/components/training/LessonDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
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
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardLayout,
            meta: { requiresAuth: true },
            redirect: '/dashboard/training',
            children: [
                {
                    path: 'training',
                    name: 'training-center',
                    component: TrainingCenter
                },
                {
                    path: 'training/course/:id',
                    name: 'course-detail',
                    component: CourseDetail
                },
                {
                    path: 'training/lesson/:id',
                    name: 'lesson-detail',
                    component: LessonDetail
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('@/components/dashboard/Profile.vue')
                },
                {
                    path: 'bank-structure',
                    name: 'bank-structure',
                    component: () => import('@/components/dashboard/BankStructure.vue')
                },
                {
                    path: 'assessment',
                    name: 'assessment',
                    component: () => import('@/components/dashboard/Assessment.vue')
                },
                {
                    path: 'support',
                    name: 'support',
                    component: () => import('@/components/dashboard/Support.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (to.meta.requiresAuth && !token) {
        return next({ name: "login" });
    }

    if (to.meta.guest && token) {
        return next({ name: "dashboard" });
    }

    next();
});

export default router
