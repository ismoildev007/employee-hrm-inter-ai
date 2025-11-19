<template>
  <div class="p-4 md:p-8 bg-white">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">Resume Audit</h1>
      <p class="text-gray-600">Resume tahlili va takomillashtirish uchun tavsiyalar</p>
    </div>

    <div class="space-y-6 md:space-y-8">
      <!-- Current Level with CTA -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 md:p-8 shadow-2xl text-white">
        <div class="flex items-center justify-between flex-wrap gap-6">
          <div class="flex-1">
            <h2 class="text-3xl font-bold mb-3">Sizning darajangiz: {{ currentLevel }}</h2>
            <p class="text-blue-100 text-lg mb-6">
              Resume va tajriba asosida aniqlandi. Haqiqiy darajangizni tasdiqlash uchun 5 ta qisqa testdan o'ting.
            </p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                  @click="navigateToSkillTest"
                  class="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium shadow-xl text-lg hover:bg-gray-50 transition flex items-center"
              >
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Darajani Tasdiqlash (5 ta test)
              </button>
              <span class="text-lg px-6 py-3 bg-white/20 backdrop-blur rounded-full">
                ~15 daqiqa
              </span>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <span class="text-3xl px-8 py-4 bg-white text-blue-600 rounded-full font-bold">{{ currentLevel }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Growth Tempo -->
      <div class="bg-white rounded-3xl p-8 shadow-lg">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <h2 class="text-2xl font-bold">O'sish sur'ati prognozi</h2>
        </div>
        <div class="space-y-6">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Hozirgi daraja: {{ currentLevel }}</span>
              <span class="text-sm text-gray-600">6 oylik prognoz</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div class="bg-blue-600 h-3 rounded-full transition-all" :style="{ width: progressValue + '%' }"></div>
            </div>
            <div class="flex items-center justify-between mt-2 text-sm text-gray-600">
              <span>Junior</span>
              <span>Middle</span>
              <span>Senior</span>
            </div>
          </div>
          <p class="text-gray-600">
            Hozirgi o'sish sur'atida keyingi 8-12 oy ichida Senior darajasiga erishishingiz mumkin
          </p>
        </div>
      </div>

      <!-- Market Comparison -->
      <div class="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h2 class="text-xl md:text-2xl font-bold">Bozor qiymati (Expected Salary)</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4 md:gap-6">
          <div class="border border-blue-200 rounded-xl p-4 md:p-6 bg-blue-50">
            <div class="text-sm text-gray-600 mb-2">Sizning darajangiz uchun</div>
            <div class="text-2xl md:text-3xl font-bold mb-2">{{ salaryRange }}</div>
            <p class="text-sm text-gray-600">Oylik maosh diapazoni</p>
          </div>
          <div class="border border-purple-200 rounded-xl p-4 md:p-6 bg-purple-50">
            <div class="text-sm text-gray-600 mb-2">Bozor o'rtachasi</div>
            <div class="text-2xl md:text-3xl font-bold mb-2">{{ marketAverage }}</div>
            <p class="text-sm text-gray-600">{{ currentLevel }} Developer uchun o'rtacha maosh</p>
          </div>
        </div>
      </div>

      <!-- Strengths, Weaknesses, Growth Areas -->
      <div class="grid md:grid-cols-3 gap-4 md:gap-6">
        <!-- Strengths -->
        <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-l-green-500">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="text-lg md:text-xl font-bold">Kuchli tomonlar</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="(item, index) in strengths" :key="index" class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Weaknesses -->
        <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-l-orange-500">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="text-lg md:text-xl font-bold">Kuchsiz tomonlar</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="(item, index) in weaknesses" :key="index" class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Growth Areas -->
        <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 border-l-blue-500">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <h3 class="text-lg md:text-xl font-bold">O'sish joylari</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="(item, index) in growthAreas" :key="index" class="flex items-start gap-2 text-sm">
              <svg class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Action Items -->
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-l-purple-600">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg md:text-xl font-bold mb-3">Keyingi qadamlar</h3>
            <div class="space-y-2 text-sm md:text-base">
              <p v-for="(action, index) in actionItems" :key="index" class="flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ action }}</span>
              </p>
            </div>
            <button
                @click="navigateToSkillTest"
                class="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Testni boshlash
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Emits
const emit = defineEmits(['navigate']);

// Reactive data
const currentLevel = ref('Middle Developer');
const progressValue = ref(65);
const salaryRange = ref('$2,500 - $3,500');
const marketAverage = ref('$2,800');

const strengths = ref([
  'React va modern frontend texnologiyalarda tajriba',
  'TypeScript va type safety tushunchasi',
  'Component architecture dizayni',
  'State management (Redux, Context)',
  'Git va version control tizimi'
]);

const weaknesses = ref([
  'Backend integratsiya tajribasi kam',
  'System design bilimi yetarli emas',
  'Performance optimization kamchiligi',
  'Testing (Unit, Integration) tajribasi kam',
  'CI/CD pipeline tushunchasi yuzaki'
]);

const growthAreas = ref([
  'Node.js va backend fundamentals o\'rganish',
  'System design patterns va best practices',
  'Web performance optimization texnikalari',
  'Testing frameworks (Jest, Testing Library)',
  'DevOps asoslari va deployment strategiyalari'
]);

const actionItems = ref([
  '5 ta skill testini bajaring (15 daqiqa)',
  'Kuchsiz tomonlar ustida ishlash uchun kurslar tanlang',
  'Mock interview qiling va feedback oling',
  'Har oylik topshiriqlarni bajaring va XP yig\'ing'
]);

// Methods
const navigateToSkillTest = () => {
  emit('navigate', '/skill-test');

  // Vue Router bilan ishlatish uchun:
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  // router.push('/skill-test')

  console.log('Navigating to skill test page');
};
</script>

<style scoped>
/* Custom animations */
.transition-all {
  transition: all 0.3s ease;
}

/* Progress bar animation */
@keyframes progressAnimation {
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
}
</style>