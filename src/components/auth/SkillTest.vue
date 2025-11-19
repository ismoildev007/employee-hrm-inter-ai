<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2">Skill Test</h1>
      <p class="text-gray-600">5 ta qisqa test orqali darajangizni tasdiqlang</p>
    </div>

    <!-- Test Content -->
    <div class="max-w-3xl mx-auto py-8">
      <div class="flex items-center gap-2 mb-8">
        <TrendingUp class="w-8 h-8 text-blue-600" />
        <span class="text-xl">CareerTrack</span>
      </div>

      <!-- Current Level Badge -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl mb-2">Skill Test</h1>
          <p class="text-gray-600">Darajangizni tasdiqlash uchun testlar</p>
        </div>
        <div class="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
          Middle Developer
        </div>
      </div>

      <!-- Progress -->
      <div class="bg-white rounded-3xl p-6 shadow-lg mb-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm">Test {{ currentTestIndex + 1 }}/5</span>
          <span class="text-sm">{{ Math.round((currentTestIndex + 1) * 20) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div
              class="bg-blue-600 h-3 rounded-full transition-all"
              :style="{ width: (currentTestIndex + 1) * 20 + '%' }"
          ></div>
        </div>
      </div>

      <!-- Question Card -->
      <div class="bg-white rounded-3xl p-8 shadow-lg mb-6">
        <div class="mb-6">
          <span class="text-sm text-gray-500">Savol {{ currentQuestionIndex + 1 }}</span>
          <h2 class="text-2xl mt-2">React'da component lifecycle methods qaysi hooklar bilan almashtirildi?</h2>
        </div>

        <div class="space-y-3">
          <button
              v-for="(option, index) in options"
              :key="index"
              @click="selectedAnswers[currentTestIndex] = index"
              :class="[
              'w-full text-left p-4 rounded-xl border-2 transition-all',
              selectedAnswers[currentTestIndex] === index
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            ]"
          >
            <div class="flex items-center gap-3">
              <div
                  :class="[
                  'w-6 h-6 rounded-full border-2 flex items-center justify-center',
                  selectedAnswers[currentTestIndex] === index
                    ? 'border-blue-600 bg-blue-600'
                    : 'border-gray-300'
                ]"
              >
                <div
                    v-if="selectedAnswers[currentTestIndex] === index"
                    class="w-2 h-2 bg-white rounded-full"
                ></div>
              </div>
              <span>{{ option }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex gap-3">
        <button
            @click="goBack"
            :disabled="currentTestIndex === 0"
            :class="[
            'flex-1 px-6 py-3 rounded-lg font-medium transition-all',
            currentTestIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
          ]"
        >
          Orqaga
        </button>
        <button
            @click="goNext"
            :disabled="selectedAnswers[currentTestIndex] === undefined"
            :class="[
            'flex-1 px-6 py-3 rounded-lg font-medium text-white transition-all',
            selectedAnswers[currentTestIndex] === undefined
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          ]"
        >
          {{ currentTestIndex === 4 ? 'Yakunlash' : 'Keyingi' }}
        </button>
      </div>
    </div>

    <!-- Result -->
    <div
        v-if="showResult"
        class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex items-center justify-center fixed inset-0"
    >
      <div class="max-w-2xl w-full bg-white rounded-3xl p-12 shadow-2xl text-center">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle class="w-12 h-12 text-green-600" />
        </div>
        <h1 class="text-4xl mb-4">Tabriklaymiz!</h1>
        <p class="text-xl text-gray-600 mb-2">Darajangiz tasdiqlandi</p>
        <div class="text-2xl px-6 py-3 bg-blue-600 text-white rounded-full inline-block mb-8">
          Middle Developer
        </div>
        <p class="text-gray-600 mb-8">
          Testlar natijasi sizning resume audit natijasini tasdiqladi. Endi dashboard'ga o'tib, o'sish rejangizni
          ko'rishingiz mumkin.
        </p>
        <button
            @click="goToDashboard"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
        >
          Dashboard'ga o'tish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TrendingUp, CheckCircle } from 'lucide-vue-next'

const router = useRouter()

const currentTestIndex = ref(0)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref({})
const showResult = ref(false)

const options = [
  'useState va useReducer',
  'useEffect va useLayoutEffect',
  'useMemo va useCallback',
  'useRef va useContext'
]

const goBack = () => {
  if (currentTestIndex.value > 0) {
    currentTestIndex.value--
    currentQuestionIndex.value = 0
  }
}

const goNext = () => {
  if (currentTestIndex.value < 4) {
    currentTestIndex.value++
    currentQuestionIndex.value = 0
  } else {
    showResult.value = true
  }
}

const goToDashboard = () => {
  router.push('/dashboard')
}
</script>