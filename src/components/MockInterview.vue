<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2">Mock Suhbatlar</h1>
      <p class="text-gray-600">Har oy oxirida avtomatik suhbatlarga tayyorgarlik va tahlil</p>
    </div>

    <!-- Overall Performance Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
      <div class="p-6 border-0 shadow-md bg-white rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Calendar class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div class="text-3xl">{{ completedInterviews.length }}</div>
            <p class="text-sm text-gray-600">Bajarilgan</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-white rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <Award class="w-6 h-6 text-green-600" />
          </div>
          <div>
            <div class="text-3xl">{{ Math.round(avgScore) }}%</div>
            <p class="text-sm text-gray-600">O'rtacha ball</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-white rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target class="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div class="text-3xl">{{ Math.round(accuracy) }}%</div>
            <p class="text-sm text-gray-600">Javob aniqligi</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-white rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
            <TrendingUp class="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <div class="text-3xl">+{{ growth }}%</div>
            <p class="text-sm text-gray-600">O'sish</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Analysis -->
    <div class="grid lg:grid-cols-3 gap-6 mb-8">
      <!-- Strengths -->
      <div class="p-6 border-0 shadow-md bg-white rounded-lg border-l-4 border-l-green-500">
        <div class="flex items-center gap-2 mb-4">
          <CheckCircle class="w-6 h-6 text-green-600" />
          <h2 class="text-xl">Yutuqlar</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(strength, index) in strengths" :key="index" class="flex items-start gap-2 text-sm">
            <Zap class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span>{{ strength }}</span>
          </li>
        </ul>
      </div>

      <!-- Weaknesses -->
      <div class="p-6 border-0 shadow-md bg-white rounded-lg border-l-4 border-l-orange-500">
        <div class="flex items-center gap-2 mb-4">
          <AlertCircle class="w-6 h-6 text-orange-600" />
          <h2 class="text-xl">Kamchiliklar</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(weakness, index) in weaknesses" :key="index" class="flex items-start gap-2 text-sm">
            <AlertCircle class="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>{{ weakness }}</span>
          </li>
        </ul>
      </div>

      <!-- Improvement Areas -->
      <div class="p-6 border-0 shadow-md bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
        <div class="flex items-center gap-2 mb-4">
          <Target class="w-6 h-6 text-blue-600" />
          <h2 class="text-xl">Ustida ishlash</h2>
        </div>
        <div class="space-y-4">
          <div v-for="(area, index) in improvementAreas" :key="index">
            <div class="flex items-center justify-between mb-2 text-sm">
              <span>{{ area.title }}</span>
              <span class="text-gray-600">{{ area.current }}% → {{ area.target }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div class="bg-blue-600 h-2 rounded-full" :style="{ width: (area.current / area.target) * 100 + '%' }"></div>
            </div>
            <p class="text-xs text-gray-600">{{ area.tips }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Interviews -->
    <div v-if="upcomingInterviews.length > 0" class="mb-8">
      <h2 class="text-2xl mb-4">Rejalashtirilgan suhbatlar</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="interview in upcomingInterviews" :key="interview.id" class="p-6 border-0 shadow-md bg-white rounded-lg border-l-4 border-l-blue-600">
          <div class="flex items-center justify-between mb-3">
            <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded">
              {{ interview.type }}
            </span>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <Calendar class="w-4 h-4" />
              {{ interview.date }}
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-4">
            Bu suhbat oy oxirida avtomatik boshlanadi. Tayyorgarlik ko'ring!
          </p>
          <div class="flex gap-2">
            <button class="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Eslatma o'rnatish
            </button>
            <button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Tayyorgarlik
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Completed Interviews -->
    <div>
      <h2 class="text-2xl mb-4">Bajarilgan suhbatlar</h2>
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Interview List -->
        <div class="space-y-4">
          <div
              v-for="interview in completedInterviews"
              :key="interview.id"
              @click="selectedInterview = interview.id"
              :class="[
              'p-6 border-0 shadow-md bg-white rounded-lg cursor-pointer transition-all',
              selectedInterview === interview.id ? 'ring-2 ring-blue-600' : 'hover:shadow-lg'
            ]"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                {{ interview.type }}
              </span>
              <span :class="[
                'inline-block px-3 py-1 text-white text-sm rounded',
                interview.score >= 80 ? 'bg-green-600' : interview.score >= 60 ? 'bg-orange-600' : 'bg-red-600'
              ]">
                {{ interview.score }}%
              </span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Calendar class="w-4 h-4" />
              {{ interview.date }}
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" :style="{ width: interview.score + '%' }"></div>
            </div>
            <div class="mt-3 text-sm text-gray-600">
              {{ interview.questions.length }} ta savol
            </div>
          </div>
        </div>

        <!-- Interview Details -->
        <div class="lg:col-span-2">
          <div v-if="selectedInterviewData" class="p-6 border-0 shadow-md bg-white rounded-lg">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-2xl mb-1">{{ selectedInterviewData.type }}</h3>
                <p class="text-sm text-gray-600">{{ selectedInterviewData.date }}</p>
              </div>
              <span :class="[
                'text-xl px-4 py-2 text-white rounded',
                selectedInterviewData.score >= 80 ? 'bg-green-600' : selectedInterviewData.score >= 60 ? 'bg-orange-600' : 'bg-red-600'
              ]">
                {{ selectedInterviewData.score }}%
              </span>
            </div>

            <!-- Overall Feedback -->
            <div class="mb-6 p-4 bg-blue-50 rounded-xl">
              <h4 class="mb-2 flex items-center gap-2">
                <Award class="w-5 h-5 text-blue-600" />
                Umumiy baholash
              </h4>
              <p class="text-sm text-gray-600">
                {{ selectedInterviewData.score >= 80
                  ? "A'lo natija! Suhbat uchun juda yaxshi tayyorgarlik ko'rsatdingiz. Texnik bilimingiz va communication skillari yuqori darajada."
                  : selectedInterviewData.score >= 60
                      ? "Yaxshi natija! Ba'zi javoblarni yaxshilash mumkin. Texnik konsepsiyalarni chuqurroq o'rganishni tavsiya qilamiz."
                      : "Ko'proq mashq qilish va tayyorgarlik kerak. Asosiy konsepsiyalarni qayta o'rganing."
                }}
              </p>
            </div>

            <!-- Per-Interview Feedback -->
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <!-- Strengths -->
              <div class="p-4 bg-green-50 rounded-xl border border-green-200">
                <div class="flex items-center gap-2 mb-3">
                  <CheckCircle class="w-5 h-5 text-green-600" />
                  <h5 class="font-medium">Yutuqlar</h5>
                </div>
                <ul class="space-y-2">
                  <li v-for="(strength, index) in selectedInterviewData.strengths" :key="index" class="flex items-start gap-2 text-sm">
                    <Zap class="w-3 h-3 text-green-600 flex-shrink-0 mt-1" />
                    <span class="text-green-900">{{ strength }}</span>
                  </li>
                </ul>
              </div>

              <!-- Weaknesses -->
              <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div class="flex items-center gap-2 mb-3">
                  <AlertCircle class="w-5 h-5 text-orange-600" />
                  <h5 class="font-medium">Kamchiliklar</h5>
                </div>
                <ul class="space-y-2">
                  <li v-for="(weakness, index) in selectedInterviewData.weaknesses" :key="index" class="flex items-start gap-2 text-sm">
                    <XCircle class="w-3 h-3 text-orange-600 flex-shrink-0 mt-1" />
                    <span class="text-orange-900">{{ weakness }}</span>
                  </li>
                </ul>
              </div>

              <!-- Improvements -->
              <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div class="flex items-center gap-2 mb-3">
                  <Target class="w-5 h-5 text-blue-600" />
                  <h5 class="font-medium">Ustida ishlash</h5>
                </div>
                <ul class="space-y-2">
                  <li v-for="(improvement, index) in selectedInterviewData.improvements" :key="index" class="flex items-start gap-2 text-sm">
                    <TrendingUp class="w-3 h-3 text-blue-600 flex-shrink-0 mt-1" />
                    <span class="text-blue-900">{{ improvement }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Questions and Answers -->
            <div>
              <h4 class="mb-4">Savollar va javoblar tahlili</h4>
              <div class="space-y-4">
                <div
                    v-for="(q, index) in selectedInterviewData.questions"
                    :key="index"
                    :class="[
                    'p-4 rounded-xl border-l-4',
                    q.correct ? 'bg-green-50 border-l-green-600' : 'bg-red-50 border-l-red-600'
                  ]"
                >
                  <div class="flex items-start gap-3 mb-2">
                    <CheckCircle v-if="q.correct" class="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <XCircle v-else class="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div class="flex-1">
                      <div class="mb-2">
                        <span class="text-sm text-gray-500">Savol {{ index + 1 }}:</span>
                        <p class="mt-1">{{ q.question }}</p>
                      </div>
                      <div class="mb-2">
                        <span class="text-sm text-gray-500">Sizning javobingiz:</span>
                        <p class="text-sm mt-1">{{ q.answer }}</p>
                      </div>
                      <div class="flex items-start gap-2 mt-3 p-3 bg-white rounded-lg">
                        <AlertCircle class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div class="text-sm mb-1">Tahlil va tavsiyalar:</div>
                          <p class="text-sm text-blue-900">{{ q.feedback }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t flex gap-3">
              <button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <Eye class="w-4 h-4" />
                To'liq yechimlarni o'rganish
              </button>
              <button class="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Tayyorgarlik rejalari
              </button>
            </div>
          </div>
          <div v-else class="p-12 border-0 shadow-md bg-white rounded-lg text-center">
            <MessageSquare class="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p class="text-gray-500">Suhbat natijasini ko'rish uchun chap tarafdan tanlang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Calendar, CheckCircle, XCircle, AlertCircle, Eye, Clock,
  TrendingUp, Award, Target, Zap, MessageSquare
} from 'lucide-vue-next'

const selectedInterview = ref(null)

const interviews = [
  {
    id: 1,
    type: 'Oddiy suhbat',
    date: '2025-10-31',
    score: 85,
    status: 'completed',
    strengths: [
      'STAR metodidan yaxshi foydalanish',
      'Strukturali javoblar berish',
      'Kompaniya haqida bilim namoyish qilish',
      'Professional yondashuv'
    ],
    weaknesses: [
      'Cliché javoblardan foydalanish',
      'Konkret misollar kam',
      "Ba'zi savollarni to'liq tushuntirmagan"
    ],
    improvements: [
      "Har bir javobga real loyiha misollari qo'shish",
      "Kuchsiz tomonlar haqida to'g'ri gapirish",
      'Natijalarni raqamlar bilan tasvirlash',
      'Mock suhbat ko\'proq mashq qilish'
    ],
    questions: [
      {
        question: "O'zingiz haqingizda gapiring",
        answer: 'Men 3 yillik tajribaga ega frontend developerman...',
        correct: true,
        feedback: 'Yaxshi structured javob. STAR metodidan foydalanganingiz ajoyib'
      },
      {
        question: 'Kuchsiz tomoningiz nima?',
        answer: 'Ba\'zida perfeksionizm bilan kurashaman',
        correct: false,
        feedback: 'Cliché javob. Realroq misollar keltiring va qanday ustida ishlayotganingizni ko\'rsating'
      },
      {
        question: 'Nima uchun kompaniyamizni tanladingiz?',
        answer: 'Kompaniya texnologik stack men qiziqadigan yo\'nalishda ishlaydi',
        correct: true,
        feedback: 'Yaxshi sabab, lekin kompaniya haqida batafsil research qilganingizni ko\'rsating'
      }
    ]
  },
  {
    id: 2,
    type: 'Texnik suhbat',
    date: '2025-10-31',
    score: 72,
    status: 'completed',
    strengths: [
      'React konsepsiyalarini yaxshi bilish',
      'Virtual DOM tushuntirishda aniqlik',
      'useEffect lifecycle tushunarli',
      'Code structure to\'g\'ri'
    ],
    weaknesses: [
      'Closures ni to\'liq tushuntirolmadi',
      'Performance optimization kamligi',
      'System design savollarda ikkilanish',
      'Edge casesni esdan chiqarish'
    ],
    improvements: [
      'JavaScript fundamentals chuqurroq o\'rganish',
      'Performance optimization patternlari o\'rganish',
      'System design interview mashq qilish',
      'LeetCode Medium/Hard masalalar yechish',
      'Debugging skills yaxshilash'
    ],
    questions: [
      {
        question: "React'da virtual DOM qanday ishlaydi?",
        answer: 'Virtual DOM - bu real DOM\'ning JavaScript object representatsiyasi...',
        correct: true,
        feedback: 'To\'liq va aniq javob. Reconciliation jarayonini ham yaxshi tushuntirgansiz'
      },
      {
        question: 'Closures nima va qanday ishlaydi?',
        answer: 'Closures - bu function ichidagi function...',
        correct: false,
        feedback: 'Asosiy konsepsiyani tushingan, lekin use case va memory management haqida gapirmadingiz'
      },
      {
        question: 'useEffect qachon ishlatiladi?',
        answer: 'Side effects uchun, masalan API calllar, subscriptions...',
        correct: true,
        feedback: 'Yaxshi. Dependency array va cleanup function ham tushuntirgansiz'
      }
    ]
  },
  {
    id: 3,
    type: 'Kod yozish',
    date: '2025-11-05',
    score: 68,
    status: 'completed',
    strengths: [
      'Masalani tez tushunish',
      'Clean code yozish',
      'Edge cases ko\'rib chiqish',
      'Time complexity hisoblash'
    ],
    weaknesses: [
      'Optimal yechim topa olmagan',
      'Data structure tanlashda xatolik',
      'Test casesni to\'liq yozmagan',
      'Vaqt bilan kurash (45 min)'
    ],
    improvements: [
      'Algorithm patterns o\'rganish (Sliding Window, Two Pointers, etc.)',
      'LeetCode har kuni mashq qilish',
      'Time/Space complexity tahlil qilishni yaxshilash',
      'Code optimization strategiyalari',
      'Tez yechim topish uchun pattern recognition'
    ],
    questions: [
      {
        question: "Array'da duplicate elementlarni topish",
        answer: 'Nested loop ishlatdim O(n²)',
        correct: false,
        feedback: 'Ishlaydi lekin optimal emas. HashSet ishlatib O(n) qilish mumkin'
      },
      {
        question: 'Binary search implement qiling',
        answer: 'Rekursiv yechim yozdim',
        correct: true,
        feedback: 'To\'g\'ri! Iterative yechim ham yozishni bilas bo\'lsangiz yaxshi'
      }
    ]
  },
  {
    id: 4,
    type: 'Oddiy suhbat',
    date: '2025-11-30',
    score: null,
    status: 'upcoming',
    questions: []
  },
  {
    id: 5,
    type: 'Texnik suhbat',
    date: '2025-11-30',
    score: null,
    status: 'upcoming',
    questions: []
  }
]

const completedInterviews = computed(() => interviews.filter(i => i.status === 'completed'))
const upcomingInterviews = computed(() => interviews.filter(i => i.status === 'upcoming'))

const avgScore = computed(() => {
  const total = completedInterviews.value.reduce((acc, i) => acc + (i.score || 0), 0)
  return completedInterviews.value.length > 0 ? total / completedInterviews.value.length : 0
})

const totalQuestions = computed(() =>
    completedInterviews.value.reduce((acc, i) => acc + i.questions.length, 0)
)

const correctAnswers = computed(() =>
    completedInterviews.value.reduce((acc, i) => acc + i.questions.filter(q => q.correct).length, 0)
)

const accuracy = computed(() =>
    totalQuestions.value > 0 ? (correctAnswers.value / totalQuestions.value) * 100 : 0
)

const scores = computed(() =>
    completedInterviews.value.map(i => i.score || 0).sort((a, b) => a - b)
)

const growth = computed(() => {
  if (scores.value.length === 0) return 0
  return scores.value[scores.value.length - 1] - scores.value[0]
})

const strengths = [
  'Texnik bilim poydevori mustahkam',
  'Communication skills yaxshi rivojlangan',
  'Real loyiha tajribasini yaxshi tushuntiradi',
  'STAR metodidan samarali foydalanadi'
]

const weaknesses = [
  "Ba'zi cliché javoblardan qochish kerak",
  'Kompaniya haqida ko\'proq research qilish',
  'Texnik terminlarni aniqroq tushuntirish',
  'Savollarga konkret misollar bilan javob berish'
]

const improvementAreas = [
  {
    title: 'Behavioral Questions',
    current: 78,
    target: 90,
    tips: 'STAR metodini qo\'llash, konkret misollar keltirish'
  },
  {
    title: 'Technical Depth',
    current: 72,
    target: 85,
    tips: 'Asosiy konsepsiyalarni chuqurroq o\'rganish, real dunyo misollari'
  },
  {
    title: 'Communication',
    current: 85,
    target: 95,
    tips: 'Tez va aniq javob berish, ortiqcha detallardan qochish'
  }
]

const selectedInterviewData = computed(() =>
    selectedInterview.value !== null
        ? interviews.find(i => i.id === selectedInterview.value)
        : null
)
</script>