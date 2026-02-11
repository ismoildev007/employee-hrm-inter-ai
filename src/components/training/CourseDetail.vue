<template>
  <div class="p-4 sm:p-6 lg:p-8 min-h-screen bg-blue-50">
    <!-- Page Header with Title -->
    <div class="mb-8">
      <h1 class="text-[28px] font-bold text-[#1a2b50] mb-1">O'qitish va rivojlantirish bo'limi</h1>
      <p class="text-[11px] font-bold text-[#3169e1] uppercase tracking-wider">ALOQABANK HR PLATFORMASI</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div
        class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
        <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-[20px] flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-layers" aria-hidden="true">
            <path
              d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
            </path>
            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
          </svg>
        </div>
        <div>
          <p class="text-2xl font-black text-slate-800">8</p>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Bloklar soni</p>
        </div>
      </div>

      <div
        class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
        <div class="w-14 h-14 bg-green-50 text-green-600 rounded-[20px] flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-bookmark" aria-hidden="true">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
        </div>
        <div>
          <p class="text-2xl font-black text-slate-800">13</p>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">O'quv
            Yo'nalishlari</p>
        </div>
      </div>

      <div
        class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
        <div
          class="w-14 h-14 bg-orange-50 text-orange-600 rounded-[20px] flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-book-open" aria-hidden="true">
            <path d="M12 7v14"></path>
            <path
              d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
            </path>
          </svg>
        </div>
        <div>
          <p class="text-2xl font-black text-slate-800">2</p>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Jami Darsliklar
          </p>
        </div>
      </div>

      <div
        class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
        <div
          class="w-14 h-14 bg-purple-50 text-purple-600 rounded-[20px] flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-file-check" aria-hidden="true">
            <path
              d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
            </path>
            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
            <path d="m9 15 2 2 4-4"></path>
          </svg>
        </div>
        <div>
          <p class="text-2xl font-black text-slate-800">15</p>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Test savollari
          </p>
        </div>
      </div>
    </div>

    <!-- Breadcrumb in Card -->
    <div
      class="flex items-center gap-2 text-sm font-bold text-slate-400 mb-6 bg-white/50 p-3 rounded-xl backdrop-blur-sm self-start">
      <router-link :to="{ name: 'training-center' }" class="hover:text-blue-600 font-medium">{{
        $t('training.breadcrumb.training') }}</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-right" aria-hidden="true">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
      <router-link :to="{ name: 'block-detail', params: { blockId } }" class="hover:text-blue-600 font-medium">{{
        blockTitle }}</router-link>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <button class="hover:text-blue-600 transition-colors">{{ directionTitle }}</button>
    </div>

    <div
      class="bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/50 p-1 min-h-[600px] shadow-2xl shadow-blue-100/50 z-10 relative">
      <!-- Page Header -->
      <div class="px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <button @click="goBack"
              class="p-4 bg-white rounded-3xl border border-slate-100 text-slate-400 hover:text-blue-600 shadow-lg hover:shadow-blue-100 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-left group-hover:-translate-x-1 transition-transform" aria-hidden="true">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <div>
              <h3 class="text-3xl font-black text-slate-800">{{ directionTitle }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Tutorials List -->
      <div class="px-6 lg:px-8 pb-8">
        <div class="flex items-center justify-between mb-6">
          <!-- <h3 class="text-2xl font-black text-slate-800">{{ $t('training.courseDetail.lessonsTitle') }}</h3> -->
          <span class="text-sm font-bold text-slate-400 uppercase tracking-widest">{{ tutorials.length }} TA DARS</span>
        </div>

        <div class="space-y-4">
          <!-- Loading Skeletons -->
          <template v-if="loading && tutorials.length === 0">
            <div v-for="n in 4" :key="n"
              class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm animate-pulse">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 bg-slate-200 rounded-2xl"></div>
                <div class="flex-1">
                  <div class="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div class="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </template>

          <!-- Actual Tutorials -->
          <template v-else>
            <div v-for="(tutorial, index) in tutorials" :key="tutorial.id" @click="goToLesson(tutorial.id)"
              class="cursor-pointer bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div class="flex items-center gap-6">
                <div
                  class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{{
                    tutorial.title }}</h4>
                  <div class="flex items-center gap-6">
                    <span
                      class="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-clock text-blue-500" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg> {{ tutorial.duration }}
                    </span>
                    <span
                      class="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-file-check text-green-500" aria-hidden="true">
                        <path
                          d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
                        </path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="m9 15 2 2 4-4"></path>
                      </svg> {{ tutorial.lessons }} Savol
                    </span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-right text-slate-400 group-hover:text-blue-600 transition-colors"
                  aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchTutorials, fetchEducationalFields, fetchBlocks } from '../../services/trainingService';

const router = useRouter();
const route = useRoute();

const blockId = computed(() => route.params.blockId);
const directionId = computed(() => route.params.directionId);

// Data refs
const currentBlock = ref(null);
const currentDirection = ref(null);
const tutorials = ref([]);
const loading = ref(true);
const error = ref(null);
const directionTitle = ref('');
const blockTitle = ref('');

// Cache key for sessionStorage
const getCacheKey = () => `tutorials_${route.params.blockId}_${route.params.directionId}`;

// Load cached data from sessionStorage
const loadCachedData = () => {
  try {
    const cached = sessionStorage.getItem(getCacheKey());
    if (cached) {
      const data = JSON.parse(cached);
      tutorials.value = data.tutorials || [];
      directionTitle.value = data.directionTitle || '';
      blockTitle.value = data.blockTitle || '';
      return true;
    }
  } catch (err) {
    console.error('Failed to load cached tutorials:', err);
  }
  return false;
};

// Save data to sessionStorage
const saveCachedData = (tutorialsData, dirTitle, blkTitle) => {
  try {
    sessionStorage.setItem(getCacheKey(), JSON.stringify({
      tutorials: tutorialsData,
      directionTitle: dirTitle,
      blockTitle: blkTitle
    }));
  } catch (err) {
    console.error('Failed to cache tutorials:', err);
  }
};

// Load block data
const loadBlockData = async () => {
  try {
    const response = await fetchBlocks();
    if (response.success && response.data && response.data.data) {
      const block = response.data.data.find(b => b.id == blockId.value);
      if (block) {
        currentBlock.value = block;
        blockTitle.value = block.name; // Set blockTitle ref
      }
    }
  } catch (err) {
    console.error('Failed to load block data:', err);
  }
};

// Load direction data
const loadDirectionData = async () => {
  try {
    const response = await fetchEducationalFields(blockId.value);
    if (response.success && response.data && response.data.data) {
      const direction = response.data.data.find(d => d.id == directionId.value);
      if (direction) {
        currentDirection.value = direction;
        directionTitle.value = direction.name; // Set directionTitle ref
      }
    }
  } catch (err) {
    console.error('Failed to load direction data:', err);
  }
};

// Combined function to load breadcrumb data (block and direction titles)
const loadBreadcrumbData = async () => {
  await loadBlockData();
  await loadDirectionData();
};

// Load tutorials
const loadTutorials = async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetchTutorials(directionId.value);

    if (response.success && response.data && response.data.data) {
      // Map API response to component format
      const mappedTutorials = response.data.data.map(tutorial => ({
        id: tutorial.id,
        title: tutorial.name,
        duration: '45 daqiqa', // Default duration, can be updated if API provides it
        lessons: 5 // Default lessons count, can be updated if API provides it
      }));
      tutorials.value = mappedTutorials;
      saveCachedData(mappedTutorials, directionTitle.value, blockTitle.value);
    }
  } catch (err) {
    console.error('Failed to load tutorials:', err);
    error.value = 'Darsliklarni yuklashda xatolik yuz berdi';

    // Fallback to mock data on error
    if (tutorials.value.length === 0) { // Only fallback if no cached data or initial load failed
      tutorials.value = [
        {
          id: 1,
          title: 'Kredit tahlil metodologiyasi',
          duration: '45 daqiqa',
          lessons: 5
        }
      ];
    }
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.push({ name: 'block-detail', params: { blockId: blockId.value } });
};

const goToLesson = (tutorialId) => {
  router.push({
    name: 'lesson-detail',
    params: {
      blockId: blockId.value,
      directionId: directionId.value,
      lessonId: tutorialId
    }
  });
};

// Load data on mount
onMounted(async () => {
  // First, try to load cached data
  const hasCachedData = loadCachedData();

  // If we have cached data, show it immediately
  if (hasCachedData) {
    loading.value = false;
  }

  // Then fetch fresh data in the background
  await loadBreadcrumbData();
  await loadTutorials();
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
```
