<template>
  <div class="p-4 sm:p-6 lg:p-8 min-h-screen bg-blue-50">
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
      <button class="hover:text-blue-600 transition-colors">{{ blockTitle }}</button>
    </div>

    <div
      class="bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/50 p-1 min-h-[600px] shadow-2xl shadow-blue-100/50 z-10 relative">
      <!-- Page Header - Centered -->
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
              <h3 class="text-3xl font-black text-slate-800">{{ blockTitle }} {{
                $t('training.blockDetail.directionsTitle') }}</h3>
              <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{{
                $t('training.blockDetail.subtitle') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Directions Grid -->
      <div class="px-6 lg:px-8 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="direction in directions" :key="direction.id" @click="goToDirection(direction.id)"
            class="cursor-pointer w-full h-full text-left bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between group">

            <div class="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-book-open text-blue-600" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>

            <h3 class="text-[17px] font-bold text-[#1a2b50] mb-2 line-clamp-2">{{ direction.title }}</h3>
            <p class="text-[13px] text-gray-400 leading-relaxed mb-8 line-clamp-3">{{ direction.desc }}</p>

            <div class="flex items-center justify-between mt-auto">
              <span class="text-[11px] font-black text-[#3169e1] uppercase tracking-wider">{{ direction.count }}
                DARS</span>
              <div
                class="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-right text-gray-400 group-hover:text-blue-600 transition-colors"
                  aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchEducationalFields, fetchBlocks } from '../../services/trainingService';

const router = useRouter();
const route = useRoute();

const blockId = computed(() => route.params.blockId);

// Block data
const currentBlock = ref(null);
const blockTitle = computed(() => currentBlock.value?.name || 'Blok');

// Directions data
const directions = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch block data
const loadBlockData = async () => {
  try {
    const response = await fetchBlocks();
    
    if (response.success && response.data && response.data.data) {
      // Find the current block by ID
      const block = response.data.data.find(b => b.id == blockId.value);
      if (block) {
        currentBlock.value = block;
      }
    }
  } catch (err) {
    console.error('Failed to load block data:', err);
  }
};

// Fetch educational fields for the current block
const loadDirections = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await fetchEducationalFields(blockId.value);
    
    if (response.success && response.data && response.data.data) {
      // Map API response to component format
      directions.value = response.data.data.map(field => ({
        id: field.id,
        title: field.name,
        desc: field.description,
        count: 0 // Placeholder for lesson count
      }));
    }
  } catch (err) {
    console.error('Failed to load educational fields:', err);
    error.value = 'Ma\'lumotlarni yuklashda xatolik yuz berdi';
    
    // Fallback to mock data on error
    directions.value = [
      {
        id: 1,
        title: 'Chakana kredit amaliyotlarini muvofiqlashtirish',
        desc: 'Kreditlash jarayonlari va mijozlar bilan ishlash standartlari',
        count: 12
      },
      {
        id: 2,
        title: 'Naqd pul va kassa amaliyotlari',
        desc: 'Kassa operatsiyalari, valyuta ayirboshlash va hisobotlar',
        count: 8
      }
    ];
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.push({ name: 'training-center' });
};

const goToDirection = (directionId) => {
  router.push({ name: 'direction-detail', params: { blockId: blockId.value, directionId } });
};

onMounted(async () => {
  await loadBlockData();
  await loadDirections();
});
</script>
