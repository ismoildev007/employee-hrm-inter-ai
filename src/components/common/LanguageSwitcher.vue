<template>
  <div class="relative">
    <button @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition border border-gray-200"
      :title="$t('common.language')">
      <span class="text-sm font-medium uppercase">{{ currentLocale }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown -->
    <transition name="dropdown">
      <div v-if="isOpen"
        class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
        <button v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)"
          class="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition flex items-center gap-3"
          :class="{ 'bg-blue-50 text-blue-600 font-medium': currentLocale === lang.code }">
          <span class="flex-1">{{ lang.name }}</span>
          <svg v-if="currentLocale === lang.code" class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isOpen = ref(false);

const languages = [
  { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const currentLocale = computed(() => locale.value);
const currentLanguage = computed(() => languages.find(lang => lang.code === locale.value));

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const dropdown = event.target.closest('.relative');
  if (!dropdown) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
