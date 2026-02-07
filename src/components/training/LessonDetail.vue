<template>
  <div class="p-4 sm:p-6 lg:p-8 ">
    <!-- Back Button -->
    <button @click="goBack" class="mb-4 sm:mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
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
              <span v-if="lesson.isRead"
                class="px-2 sm:px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
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
      <div class="p-4 sm:p-6 lg:p-8 space-y-8">
        <!-- Top Section: Video & Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <!-- Video Section -->
          <div v-if="lesson.videoUrl" class="rounded-xl overflow-hidden bg-black aspect-video relative group shadow-lg">
            <video v-if="lesson.videoType === 'native'" controls class="w-full h-full object-cover">
              <source :src="lesson.videoUrl" type="video/mp4">
              Brauzeringiz video formatini qo'llab-quvvatlamaydi.
            </video>
            <iframe v-else :src="lesson.videoUrl" title="Lesson Video" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen class="w-full h-full"></iframe>
          </div>

          <!-- Text Content -->
          <div class="prose prose-sm sm:prose max-w-none h-full overflow-y-auto custom-scrollbar">
            <div v-html="lesson.content"></div>
          </div>
        </div>

        <!-- Files Section (Optional) -->
        <div v-if="lesson.files && lesson.files.length > 0" class="bg-slate-50 rounded-xl p-6 border border-slate-100">
          <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            Biriktirilgan fayllar
          </h3>
          <div class="grid gap-3 sm:grid-cols-2">
            <div v-for="(file, index) in lesson.files" :key="index"
              class="bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex items-center justify-between group">
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs uppercase shrink-0">
                  {{ file.ext }}
                </div>
                <div class="min-w-0">
                  <p class="font-medium text-slate-700 truncate text-sm">{{ file.name }}</p>
                  <p class="text-xs text-slate-400">{{ file.size }}</p>
                </div>
              </div>
              <button class="p-2 text-slate-400 hover:text-blue-600 transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Question Section (Optional) -->
        <div v-if="lesson.question" class="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-800 mb-2">Nazorat savoli</h3>
              <p class="text-slate-600 text-sm leading-relaxed">{{ lesson.question.text }}</p>
            </div>
          </div>

          <div class="space-y-4">
            <textarea v-model="userAnswer" rows="4"
              class="w-full rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm p-4 resize-none shadow-sm"
              placeholder="Javobingizni bu yerga yozing..."></textarea>
            <div class="flex justify-end">
              <button @click="submitAnswer"
                class="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2">
                <span>Javobni yuborish</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mark as Read / Navigation -->
        <div class="pt-6 border-t border-gray-200">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <!-- Previous Button -->
            <button v-if="hasPreviousLesson" @click="goToPreviousLesson"
              class="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span class="text-sm sm:text-base font-medium">{{ $t('training.lesson.previousLesson') }}</span>
            </button>
            <div v-else></div>

            <!-- Mark Read / Next Group -->
            <div class="flex items-center gap-3">
              <button v-if="!lesson.isRead" @click="markAsRead"
                class="flex-1 sm:flex-none px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ $t('training.lesson.markAsRead') }}</span>
              </button>

              <button v-if="hasNextLesson" @click="goToNextLesson"
                class="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                <span>{{ $t('training.lesson.nextLesson') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
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

const router = useRouter();
const route = useRoute();

const lessonId = computed(() => parseInt(route.params.lessonId));
const blockId = computed(() => route.params.blockId);
const directionId = computed(() => route.params.directionId);

// Mock lesson data
const lesson = ref({
  id: 1,
  title: 'Kredit tahlil metodologiyasi',
  duration: 15,
  isRead: false,
  // New fields
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example video
  videoType: 'iframe', // 'native' or 'iframe'
  files: [
    { name: 'Kredit_Siyosati_2024.pdf', size: '2.4 MB', ext: 'PDF', url: '#' },
    { name: 'Tahlil_Namuna.docx', size: '156 KB', ext: 'DOC', url: '#' }
  ],
  question: {
    id: 101,
    text: "Kredit tahlilining asosiy maqsadi nima va u bank uchun qanday ahamiyatga ega? Qisqacha tushuntirib bering."
  },
  content: `
    <h2>Kredit tahlili metodologiyasi</h2>
    <p>Kredit tahlili - bu qarz oluvchining kreditga layoqatliligini baholash jarayoni.</p>
    
    <h3>Asosiy bosqichlar:</h3>
    <ul>
      <li>Mijozning moliyaviy holatini o'rganish</li>
      <li>Kredit tarixini tekshirish</li>
      <li>Garov ta'minotini baholash</li>
      <li>Biznes rejani tahlil qilish</li>
    </ul>
  `
});

const userAnswer = ref('');

const submitAnswer = () => {
  if (!userAnswer.value.trim()) return;
  // TODO: Submit to API
  console.log('Answer submitted:', userAnswer.value);
  alert('Javobingiz qabul qilindi!');
  userAnswer.value = '';
};

const lessonNumber = computed(() => lessonId.value);
const hasPreviousLesson = computed(() => lessonId.value > 1);
const hasNextLesson = computed(() => lessonId.value < 12);

const markAsRead = () => {
  lesson.value.isRead = true;
};

const goBack = () => {
  router.push({
    name: 'direction-detail',
    params: {
      blockId: blockId.value,
      directionId: directionId.value
    }
  });
};

const goToPreviousLesson = () => {
  if (hasPreviousLesson.value) {
    router.push({
      name: 'lesson-detail',
      params: {
        blockId: blockId.value,
        directionId: directionId.value,
        lessonId: lessonId.value - 1
      }
    });
  }
};

const goToNextLesson = () => {
  if (hasNextLesson.value) {
    router.push({
      name: 'lesson-detail',
      params: {
        blockId: blockId.value,
        directionId: directionId.value,
        lessonId: lessonId.value + 1
      }
    });
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
