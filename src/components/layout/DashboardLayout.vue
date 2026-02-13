<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden">
    <!-- Mobile Overlay -->
    <transition name="fade">
      <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        aria-hidden="true" />
    </transition>

    <!-- Sidebar -->
    <aside :class="[
      'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]">
      <!-- Logo/Header -->
      <div class="px-6 pt-7 border-b border-gray-200 flex items-center justify-between">
        <div>
          <img src="../../assets/logo/Logo.svg" alt="LMS Inter-AI" class="h-10 w-auto" />
          <!-- <p class="text-xm text-gray-500 mt-1 ml-10">
            LMS by Inter-AI
          </p> -->
        </div>

        <!-- Close button for mobile -->
        <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          aria-label="Close sidebar">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>


      <!-- Navigation Menu -->
      <nav class="flex-1 p-4 overflow-y-auto">
        <ul class="space-y-1">
          <li>
            <div class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
              title="Coming soon">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-sm font-medium">{{ $t('dashboard.sidebar.myProfile') }}</span>
            </div>
          </li>

          <li>
            <div class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
              title="Coming soon">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="text-sm font-medium">{{ $t('dashboard.sidebar.bankStructure') }}</span>
            </div>
          </li>

          <li>
            <router-link to="/dashboard/training" @click="closeSidebarOnMobile"
              class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition"
              :class="{ 'bg-blue-50 text-blue-600 border-l-4 border-blue-600': $route.path.includes('/dashboard/training') }">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span class="text-sm font-medium">{{ $t('dashboard.sidebar.training') }}</span>
            </router-link>
          </li>

          <li>
            <div class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
              title="Coming soon">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span class="text-sm font-medium">{{ $t('dashboard.sidebar.assessment') }}</span>
            </div>
          </li>

          <li>
            <div class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 cursor-not-allowed opacity-50"
              title="Coming soon">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="text-sm font-medium">{{ $t('dashboard.sidebar.support') }}</span>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-gray-200">
        <button @click="handleLogout"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition w-full">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span class="text-sm font-medium">{{ $t('common.logout') }}</span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 overflow-auto lg:ml-0">
      <!-- Top Header -->
      <header
        class="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Mobile Menu Toggle -->
          <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            aria-label="Toggle sidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Functionality Icons -->
          <div class="hidden md:flex items-center gap-2 ml-4">
            <!-- Refresh -->
            <button @click="handleRefresh"
              class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
              :title="$t('dashboard.header.refresh')">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <!-- Fullscreen -->
            <button @click="toggleFullscreen"
              class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
              :title="$t('dashboard.header.fullscreen')">
              <svg v-if="!isFullscreen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- <div class="w-px h-6 bg-gray-300 mx-1"></div> -->

            <!-- Desktop Preview -->
            <!-- <button @click="setPreviewMode('desktop')" class="p-2 rounded-lg transition"
              :class="previewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'"
              :title="$t('dashboard.header.desktopView')">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button> -->
          </div>
        </div>

        <!-- User Info & Language -->
        <div class="flex items-center gap-3 sm:gap-4">
          <!-- Language Switcher -->
          <LanguageSwitcher />

          <div class="w-px h-6 bg-gray-300 hidden sm:block"></div>

          <div class="hidden sm:block text-right">
            <p class="text-sm font-medium text-gray-900 truncate max-w-[200px]">{{ userName }}</p>
            <p class="text-xs text-gray-500 truncate max-w-[200px]">{{ userRole }}</p>
          </div>
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-blue-600 font-bold text-sm">{{ userInitials }}</span>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="bg-blue-50">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import LanguageSwitcher from '../common/LanguageSwitcher.vue';
import { getCurrentUser, fetchUser } from '../../services/authService';

const router = useRouter();

// User data from localStorage
const currentUser = ref(getCurrentUser());
const userName = ref(currentUser.value ? `${currentUser.value.first_name || currentUser.value.firstname} ${currentUser.value.last_name || currentUser.value.lastname}` : 'User');
const userRole = ref(currentUser.value?.role || '------- . -------');
// "MUTAXASSIS • XODIMLARNI BOSHQARISH DEPARTAMENTI"

const updateUserData = async () => {
  const userData = await fetchUser();
  if (userData) {
    currentUser.value = userData;
    // Adapt fields based on actual API response keys
    const fname = userData.first_name || userData.firstname || 'User';
    const lname = userData.last_name || userData.lastname || '';
    userName.value = `${fname} ${lname}`.trim();
    // userRole.value = userData.role || userRole.value;
  }
};

const userInitials = computed(() => {
  const names = userName.value.split(' ');
  return names[0]?.charAt(0) + (names[1]?.charAt(0) || '');
});

// Sidebar state for mobile
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebarOnMobile = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  }
};

// Navbar functionality states
const isFullscreen = ref(false);
const previewMode = ref('desktop');

const handleRefresh = () => {
  window.location.reload();
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      isFullscreen.value = true;
    }).catch((err) => {
      console.error('Fullscreen error:', err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        isFullscreen.value = false;
      });
    }
  }
};

const setPreviewMode = (mode) => {
  previewMode.value = mode;
  const mainContent = document.querySelector('main');
  if (!mainContent) return;

  mainContent.classList.remove('preview-mobile', 'preview-tablet', 'preview-desktop');
  mainContent.classList.add(`preview-${mode}`);

  console.log(`Preview mode set to: ${mode}`);
};

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement;
};

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  setPreviewMode('desktop');
  updateUserData();
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
});

const handleLogout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
