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
      class="bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/50 p-10 min-h-[600px] shadow-2xl shadow-blue-100/50 z-10 relative">
      <div class="animate-in slide-in-from-right-8 duration-500 space-y-8 max-w-5xl mx-auto">
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
        <div class="space-y-4">
          <div class="flex items-center justify-between px-4">
            <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Darslik mavzulari</h4>
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">1 TA DARS</span>
          </div>
          <div class="flex flex-col gap-4">
            <div v-for="lesson in lessons" :key="lesson.id" @click="goToLesson(lesson.id)"
              class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group flex items-center justify-between cursor-pointer">
              <div class="flex items-center gap-8 min-w-0">
                <div class="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button disabled=""
                    class="p-1.5 text-slate-300 hover:text-blue-600 disabled:opacity-10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-arrow-up" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </button>
                  <button disabled=""
                    class="p-1.5 text-slate-300 hover:text-blue-600 disabled:opacity-10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-arrow-down" aria-hidden="true">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
                <div
                  class="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {{ lesson.id }}</div>
                <div class="min-w-0">
                  <p class="font-black text-slate-800 truncate text-xl leading-tight">{{ lesson.title }}</p>
                  <div class="flex items-center gap-4 mt-2">
                    <span
                      class="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-video text-red-500" aria-hidden="true">
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                      </svg> Video mavjud
                    </span>
                    <div class="w-1 h-1 bg-slate-200 rounded-full"></div>
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
                      </svg> 5 Savol
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const blockId = computed(() => route.params.blockId);
const directionId = computed(() => route.params.directionId);

// Block data
const blocks = {
  1: { title: 'Chakana' },
  2: { title: 'Korporativ / Yuridik' },
  3: { title: 'IT' },
  4: { title: 'Soft skill' }
};

const blockTitle = computed(() => blocks[blockId.value]?.title || 'Blok');

// Direction data
const directions = {
  1: { title: 'Chakana kredit amaliyotlarini muvofiqlashtirish darsliklari' },
  2: { title: 'Naqd pul va kassa amaliyotlari' },
  3: { title: 'Chakana nokredit amaliyotlarini muvofiqlashtirish' }
};

const directionTitle = computed(() => directions[directionId.value]?.title || 'Yo\'nalish');

// Lessons data
const lessons = ref([
  {
    id: 1,
    title: 'Kredit tahlil metodologiyasi',
    duration: 5
  }
]);

const goBack = () => {
  router.push({ name: 'block-detail', params: { blockId: blockId.value } });
};

const goToLesson = (lessonId) => {
  router.push({ name: 'lesson-detail', params: { blockId: blockId.value, directionId: directionId.value, lessonId } });
};
</script>
