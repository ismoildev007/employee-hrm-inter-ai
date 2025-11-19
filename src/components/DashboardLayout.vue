<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside
        class="w-64 bg-white border-r flex flex-col fixed inset-y-0 left-0 z-30 transform transition-transform duration-200 ease-in-out md:static md:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    >
      <!-- Logo -->
      <div class="p-6 border-b flex items-center justify-between md:block">
        <RouterLink to="/" class="flex items-center gap-2">
          <TrendingUp class="w-7 h-7 text-blue-600" />
          <span class="text-lg">CareerTrack</span>
        </RouterLink>
        <button
            class="md:hidden p-2 rounded-lg hover:bg-gray-100"
            @click="sidebarOpen = false"
        >
          ✕
        </button>
      </div>

      <!-- Menu Items -->
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <RouterLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            @click="sidebarOpen = false"
        >
          <div
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
              :class="
              route.path === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            "
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.label }}</span>
          </div>
        </RouterLink>
      </nav>

      <!-- Subscription Status -->
      <div class="p-4 border-t mt-auto">
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <Crown class="w-4 h-4 text-blue-600" />
            <span class="text-sm">Free Plan</span>
          </div>
          <p class="text-xs text-gray-600 mb-3">
            Pro planga o'ting va barcha imkoniyatlardan foydalaning
          </p>
          <button class="w-full text-sm py-2 rounded-lg bg-blue-600 text-white">
            Upgrade
          </button>
        </div>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/30 z-20 md:hidden"
        @click="sidebarOpen = false"
    ></div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col md:ml-0">
      <!-- Top Bar -->
      <header class="bg-white border-b px-4 md:px-8 py-3 md:py-4">
        <div class="flex items-center justify-between gap-3">
          <!-- Left: Mobile Menu + Search -->
          <div class="flex items-center gap-3 flex-1">
            <button
                class="md:hidden p-2 rounded-lg hover:bg-gray-100"
                @click="sidebarOpen = true"
            >
              ☰
            </button>
            <!-- Search -->
            <div class="flex-1 max-w-xl">
              <div class="relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Qidirish..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Right Side -->
          <div class="flex items-center gap-2 md:gap-4">
            <!-- Notifications -->
            <button
                class="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
            >
              <Bell class="w-5 h-5" />
              <span
                  class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              ></span>
            </button>

            <!-- User Menu -->
            <div class="relative">
              <button
                  class="flex items-center gap-2 md:gap-3 hover:bg-gray-50 rounded-xl p-2 transition-colors"
                  @click="userMenuOpen = !userMenuOpen"
              >
                <div
                    class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium"
                >
                  JD
                </div>
                <div class="text-left hidden sm:block">
                  <div class="text-sm">John Doe</div>
                  <span
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-600 text-white"
                  >
                    Middle
                  </span>
                </div>
              </button>

              <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
              >
                <div
                    v-if="userMenuOpen"
                    class="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-40"
                >
                  <div class="px-3 py-2 text-xs font-medium text-gray-500">
                    Mening akkauntim
                  </div>
                  <div class="border-t">
                    <button
                        class="w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      <User class="w-4 h-4 mr-2" />
                      Profile
                    </button>
                    <button
                        class="w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      <Settings class="w-4 h-4 mr-2" />
                      Sozlamalar
                    </button>
                  </div>
                  <div class="border-t">
                    <button
                        class="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut class="w-4 h-4 mr-2" />
                      Chiqish
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';
import {
  TrendingUp,
  LayoutDashboard,
  FileText,
  MessageSquare,
  Award,
  Briefcase,
  Bell,
  User,
  Search,
  LogOut,
  Settings,
  Crown,
} from 'lucide-vue-next';

const route = useRoute();

const sidebarOpen = ref(false);
const userMenuOpen = ref(false);

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FileText, label: 'Zametka', path: '/dashboard/notes' },
  { icon: MessageSquare, label: 'Mock suhbat', path: '/dashboard/mock-interview' },
  { icon: Award, label: "O'sish", path: '/dashboard/upgrade' },
  { icon: Briefcase, label: 'Vakansiyalar', path: '/dashboard/jobs' },
  { icon: Bell, label: 'Bildirishnomalar', path: '/dashboard/notifications' },
  { icon: User, label: 'Profile', path: '/dashboard/profile' },
];
</script>
