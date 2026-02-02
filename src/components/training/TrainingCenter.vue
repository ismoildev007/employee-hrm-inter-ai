<template>
  <div>
    <!-- Page Header -->
    <div class="mb-6 sm:mb-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ $t('training.center.title') }}</h1>
      <p class="text-blue-600 text-xs sm:text-sm font-medium">{{ $t('training.center.subtitle') }}</p>
      <button class="mt-4 bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition">
        29 {{ $t('training.center.directions') }}
      </button>
    </div>

    <!-- Courses Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-100 cursor-pointer"
        @click="goToCourse(course.id)"
      >
        <!-- Course Icon -->
        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="course.icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            <path v-else-if="course.icon === 'book'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <!-- Course Title -->
        <h3 class="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[3rem] line-clamp-2">{{ course.title }}</h3>

        <!-- Course Stats -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-sm font-medium text-gray-700">{{ course.lessonsCount }} {{ $t('training.center.lessons') }}</span>
          <span class="text-sm font-medium text-blue-600"></span>
        </div>

        <!-- Course Action Button -->
        <button
          @click.stop="goToCourse(course.id)"
          class="w-full text-blue-600 font-medium text-xs sm:text-sm py-2 hover:bg-blue-50 rounded-lg transition"
        >
          {{ $t('training.center.enterCourse') }} →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Mock courses data
const courses = ref([
  {
    id: 1,
    title: 'Monitoring va kreditni limitlash departamenti',
    lessonsCount: 12,
    icon: 'shield'
  },
  {
    id: 2,
    title: 'Risk menejmenti departamenti',
    lessonsCount: 12,
    icon: 'shield'
  },
  {
    id: 3,
    title: 'Xavfsizlik xizmati',
    lessonsCount: 12,
    icon: 'book'
  },
  {
    id: 4,
    title: 'Xodimlarni boshqarish departamenti',
    lessonsCount: 12,
    icon: 'book'
  },
  {
    id: 5,
    title: 'Yuridik xizmat',
    lessonsCount: 12,
    icon: 'book'
  },
  {
    id: 6,
    title: 'Axborot texnologiyalaridan foydalanish va ta\'minlash blok',
    lessonsCount: 12,
    icon: 'document'
  },
  {
    id: 7,
    title: 'Axborot texnologiyalarini ishlab chiqish blok',
    lessonsCount: 12,
    icon: 'document'
  },
  {
    id: 8,
    title: 'Bank kartalar biznesi blok',
    lessonsCount: 12,
    icon: 'document'
  }
]);

const goToCourse = (courseId) => {
  router.push(`/dashboard/training/course/${courseId}`);
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
