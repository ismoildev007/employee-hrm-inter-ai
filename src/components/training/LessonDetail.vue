<template>
  <div>
    <!-- Back Button -->
    <button
      @click="goBack"
      class="mb-4 sm:mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="text-sm sm:text-base font-medium">{{ $t('training.lesson.backToCourse') }}</span>
    </button>

    <!-- Lesson Content -->
    <div class="bg-white rounded-xl shadow-sm">
      <!-- Lesson Header -->
      <div class="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span class="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                {{ $t('training.lesson.lesson') }} {{ lessonNumber }}
              </span>
              <span
                v-if="lesson.isRead"
                class="px-2 sm:px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ $t('training.lesson.read') }}
              </span>
            </div>
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{{ lesson.title }}</h1>
            <p class="text-sm sm:text-base text-gray-600">{{ lesson.duration }} {{ $t('training.lesson.minutes') }}</p>
          </div>
        </div>
      </div>

      <!-- Lesson Body -->
      <div class="p-4 sm:p-6 lg:p-8">
        <div class="prose prose-sm sm:prose max-w-none">
          <div v-html="lesson.content"></div>
        </div>

        <!-- Mark as Read Button -->
        <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
          <button
            v-if="!lesson.isRead"
            @click="markAsRead"
            class="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ $t('training.lesson.markAsRead') }}
          </button>
          <div v-else class="flex items-center gap-2 text-green-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm sm:text-base font-medium">{{ $t('training.lesson.alreadyRead') }}</span>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            v-if="hasPreviousLesson"
            @click="goToPreviousLesson"
            class="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm sm:text-base font-medium">{{ $t('training.lesson.previousLesson') }}</span>
          </button>
          <div v-else></div>

          <button
            v-if="hasNextLesson"
            @click="goToNextLesson"
            class="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition"
          >
            <span>{{ $t('training.lesson.nextLesson') }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const lessonId = computed(() => parseInt(route.params.id));

// Mock lesson data
const lesson = ref({
  id: 1,
  title: 'Kirish: Departament haqida umumiy ma\'lumot',
  duration: 15,
  isRead: false,
  content: `
    <h2>Xodimlarni boshqarish departamenti haqida</h2>
    <p>Xodimlarni boshqarish departamenti (HR Department) - bu tashkilotdagi eng muhim bo'linmalardan biri bo'lib, u xodimlar bilan bog'liq barcha jarayonlarni boshqaradi.</p>
    
    <h3>Asosiy vazifalar:</h3>
    <ul>
      <li>Yangi xodimlarni qabul qilish va ishga joylashtirishni tashkil etish</li>
      <li>Xodimlarning kasbiy rivojlanishini ta'minlash</li>
      <li>Mehnat munosabatlarini tartibga solish</li>
      <li>Xodimlarni baholash va motivatsiya qilish</li>
      <li>Korporativ madaniyatni rivojlantirish</li>
    </ul>

    <h3>Departament tuzilmasi:</h3>
    <p>Xodimlarni boshqarish departamenti quyidagi bo'limlardan iborat:</p>
    <ul>
      <li>Kadrlar bo'limi</li>
      <li>O'qitish va rivojlantirish bo'limi</li>
      <li>Kompensatsiya va imtiyozlar bo'limi</li>
      <li>Ichki kommunikatsiya bo'limi</li>
    </ul>

    <h3>Maqsad va vazifalar:</h3>
    <p>Departamentning asosiy maqsadi - tashkilotda samarali ishlaydigan, malakali va motivatsiyalangan xodimlar jamoasini shakllantirish va rivojlantirishdir.</p>

    <blockquote>
      <p><strong>Muhim:</strong> Xodimlarni boshqarish departamenti tashkilotning strategik maqsadlariga erishishda muhim rol o'ynaydi.</p>
    </blockquote>
  `
});

const lessonNumber = computed(() => lessonId.value);
const hasPreviousLesson = computed(() => lessonId.value > 1);
const hasNextLesson = computed(() => lessonId.value < 12);

const markAsRead = () => {
  lesson.value.isRead = true;
  // TODO: Save to backend/store
  // await updateLessonStatus(lessonId.value, { isRead: true });
};

const goBack = () => {
  router.push('/dashboard/training/course/1'); // TODO: Get actual course ID
};

const goToPreviousLesson = () => {
  if (hasPreviousLesson.value) {
    router.push(`/dashboard/training/lesson/${lessonId.value - 1}`);
  }
};

const goToNextLesson = () => {
  if (hasNextLesson.value) {
    router.push(`/dashboard/training/lesson/${lessonId.value + 1}`);
  }
};

// Load lesson data from API
onMounted(() => {
  // TODO: Fetch lesson data from API
  // const data = await fetchLessonData(lessonId.value);
  // lesson.value = data;
});
</script>

<style scoped>
.prose {
  color: #374151;
  line-height: 1.75;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.prose p {
  margin-bottom: 1rem;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  background: #eff6ff;
  padding: 1rem;
  border-radius: 0.5rem;
}

.prose blockquote p {
  margin: 0;
}
</style>
