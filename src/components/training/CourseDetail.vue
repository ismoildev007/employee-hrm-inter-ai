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
      <span class="text-sm sm:text-base font-medium">{{ $t('training.course.backToCourses') }}</span>
    </button>

    <!-- Course Header -->
    <div class="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm mb-4 sm:mb-6">
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <div class="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{{ course.title }}</h1>
          <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{{ course.description }}</p>
          <div class="flex flex-wrap items-center gap-3 sm:gap-4">
            <span class="text-xs sm:text-sm font-medium text-gray-700">{{ lessons.length }} {{ $t('training.course.lessons') }}</span>
            <span class="text-xs sm:text-sm font-medium text-blue-600">{{ $t('training.course.certificate') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lessons List -->
    <div class="space-y-2 sm:space-y-3">
      <div
        v-for="(lesson, index) in lessons"
        :key="lesson.id"
        @click="goToLesson(lesson.id)"
        class="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100"
      >
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <!-- Lesson Number -->
            <div class="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold text-sm sm:text-base">{{ index + 1 }}</span>
            </div>

            <!-- Lesson Info -->
            <div class="flex-1 min-w-0">
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 truncate">{{ lesson.title }}</h3>
              <p class="text-xs sm:text-sm text-gray-500">{{ lesson.duration }} {{ $t('training.course.minutes') }}</p>
            </div>
          </div>

          <!-- Read/Unread Status -->
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span
              v-if="lesson.isRead"
              class="hidden sm:flex px-3 sm:px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium items-center gap-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
                {{ $t('training.course.read') }}
            </span>
            <span
              v-else
              class="hidden sm:flex px-3 sm:px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm font-medium"
            >
              {{ $t('training.course.unread') }}
            </span>

            <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
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

const courseId = computed(() => route.params.id);

// Mock course data
const course = ref({
  id: 1,
  title: 'Xodimlarni boshqarish departamenti',
  description: 'Bu kursda siz xodimlarni boshqarish departamentining asosiy vazifalar va funksiyalari haqida to\'liq ma\'lumot olasiz.'
});

// Mock lessons data with read/unread status
const lessons = ref([
  { id: 1, title: 'Kirish: Departament haqida umumiy ma\'lumot', duration: 15, isRead: true },
  { id: 2, title: 'Xodimlarni qabul qilish jarayoni', duration: 20, isRead: true },
  { id: 3, title: 'Kadrlar siyosati va strategiyasi', duration: 25, isRead: false },
  { id: 4, title: 'Xodimlarni baholash tizimi', duration: 30, isRead: false },
  { id: 5, title: 'Motivatsiya va rag\'batlantirish', duration: 20, isRead: false },
  { id: 6, title: 'Kasbiy rivojlanish dasturlari', duration: 25, isRead: false },
  { id: 7, title: 'Ichki kommunikatsiya va korporativ madaniyat', duration: 20, isRead: false },
  { id: 8, title: 'Mehnat qonunchiligi asoslari', duration: 30, isRead: false },
  { id: 9, title: 'Xodimlar bilan ishlash bo\'yicha hujjatlar', duration: 25, isRead: false },
  { id: 10, title: 'Konfliktlarni boshqarish', duration: 20, isRead: false },
  { id: 11, title: 'Jamoaviy ishlash ko\'nikmalari', duration: 25, isRead: false },
  { id: 12, title: 'Yakuniy test va sertifikat', duration: 30, isRead: false }
]);

const goBack = () => {
  router.push('/dashboard/training');
};

const goToLesson = (lessonId) => {
  router.push(`/dashboard/training/lesson/${lessonId}`);
};

// Load course and lessons data from API
onMounted(() => {
  // TODO: Fetch course and lessons data from API
  // const data = await fetchCourseData(courseId.value);
  // course.value = data.course;
  // lessons.value = data.lessons;
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
