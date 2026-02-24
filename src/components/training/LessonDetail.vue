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
    <div v-if="loading && !tutorial" class="bg-white rounded-xl shadow-sm p-8 animate-pulse">
      <div class="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
      <div class="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
      <div class="h-64 bg-slate-200 rounded mb-4"></div>
      <div class="h-32 bg-slate-200 rounded"></div>
    </div>

    <div v-else class="bg-white rounded-xl shadow-sm">
      <!-- Lesson Header -->

      <div class="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span class="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                {{ lessonNumber }} - {{ $t('training.directionDetail.title') }}
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
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{{ lesson.title }}</h1>
            <!-- Darslik tavsifi sarlavhadan pastda -->
            <p v-if="lesson.content" class="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">{{ lesson.content
              }}</p>
          </div>
        </div>
      </div>

      <!-- Lesson Body -->
      <div class="p-4 sm:p-6 lg:p-8 space-y-8">
        <!-- Videos Section: yonma-yon grid -->
        <div v-if="lesson.videos && lesson.videos.length > 0">
          <div :class="lesson.videos.length === 1
            ? 'grid grid-cols-1 gap-4'
            : 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'">
            <div v-for="(video, vIdx) in lesson.videos" :key="vIdx" class="flex flex-col gap-2">
              <!-- Video player -->
              <div class="rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
                <video :src="video.stream_url || video.videoUrl" controls preload="metadata"
                  class="w-full h-full object-cover">
                </video>
              </div>
              <!-- Video izohi (description) -->
              <p v-if="video.description" class="text-xs sm:text-sm text-gray-500 leading-relaxed px-1">
                {{ video.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Files Section (Accordion) -->
        <div v-if="lesson.files && lesson.files.length > 0"
          class="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100">
          <h3 class="text-base sm:text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            {{ $t('training.lessonDetail.attachedFiles') }}
          </h3>
          <div class="space-y-3">
            <div v-for="(file, index) in lesson.files" :key="index"
              class="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all">
              <!-- Accordion header -->
              <button @click="toggleFile(index)"
                class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-slate-50 transition-colors group">
                <div class="flex items-center gap-3 min-w-0">
                  <!-- File type icon -->
                  <div :class="fileIconClass(file.ext)"
                    class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0">
                    {{ file.ext }}
                  </div>
                  <div class="min-w-0 text-left">
                    <p class="font-semibold text-slate-700 text-sm">{{ $t('training.lessonDetail.fileLabel') }} {{ index
                      + 1 }}</p>
                    <p class="text-xs text-slate-400">
                      {{ isViewable(file.ext) ? $t('training.lessonDetail.clickToView') :
                        $t('training.lessonDetail.clickToDownload') }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <!-- Download button -->
                  <a :href="file.url" target="_blank" download @click.stop
                    class="p-1.5 text-slate-400 hover:text-blue-600 transition rounded-lg hover:bg-blue-50"
                    :title="$t('training.lessonDetail.download')">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <!-- Expand chevron -->
                  <svg v-if="isViewable(file.ext)" class="w-5 h-5 text-slate-400 transition-transform duration-300"
                    :class="openFiles.includes(index) ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>

              <!-- Accordion body: inline viewer -->
              <div v-if="isViewable(file.ext) && openFiles.includes(index)" class="border-t border-slate-100">
                <!-- PDF viewer — Google Docs Viewer orqali -->
                <div v-if="isPdf(file.ext)" class="w-full relative" style="height: 75vh;">
                  <!-- Loading overlay -->
                  <div v-if="pdfLoading[index]"
                    class="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 gap-3">
                    <!-- Spinner -->
                    <div class="w-12 h-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin"></div>
                    <p class="text-sm text-slate-500 font-medium">{{ $t('training.lessonDetail.pdfLoading') }}</p>
                  </div>
                  <iframe :src="'https://docs.google.com/viewer?url=' + encodeURIComponent(file.url) + '&embedded=true'"
                    class="w-full h-full border-0" allowfullscreen @load="pdfLoading[index] = false">
                    <p class="p-4 text-sm text-slate-500">PDF ko'rib bo'lmadi.
                      <a :href="file.url" target="_blank" class="text-blue-600 underline">Yuklab oling</a>
                    </p>
                  </iframe>
                </div>
                <!-- Image viewer -->
                <div v-else-if="isImage(file.ext)" class="p-4 flex justify-center bg-slate-50">
                  <img :src="file.url" :alt="file.name"
                    class="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md" />
                </div>
                <!-- Video viewer -->
                <div v-else-if="isVideo(file.ext)" class="p-4">
                  <video :src="file.url" controls class="w-full rounded-lg max-h-[70vh] bg-black">
                    Brauzer video formati qo'llab-quvvatlamaydi.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Tests Section -->
        <div v-for="test in tests" :key="test.id" class="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-slate-800 mb-2">{{ test.name }}</h3>
              <p class="text-sm text-slate-600">{{ $t('training.lessonDetail.questionsCount', {
                count: test.questions.length
              }) }}</p>
              <p v-if="isTestSubmitted(test.id)" class="text-sm text-green-600 font-medium mt-1">✓ {{
                $t('training.lessonDetail.testSubmitted') }}</p>
            </div>
          </div>

          <!-- Questions -->
          <div class="space-y-6">
            <div v-for="(question, qIndex) in test.questions" :key="question.id" class="bg-white rounded-lg p-4">
              <p class="font-medium text-slate-800 mb-4">{{ qIndex + 1 }}. {{ question.question }}</p>

              <!-- Single/Multiple Choice Options -->
              <div v-if="question.type !== 'text'" class="space-y-2">
                <label v-for="option in question.options" :key="option.id"
                  class="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer transition"
                  :class="{
                    'bg-blue-50 border-blue-400': isAnswerSelected(question.id, option.id),
                    'hover:border-blue-300 hover:bg-blue-50/50': !isTestSubmitted(test.id),
                    'opacity-60 cursor-not-allowed': isTestSubmitted(test.id)
                  }">
                  <input :type="question.type === 'single_choice' ? 'radio' : 'checkbox'"
                    :name="`question-${question.id}`" :value="option.id"
                    @change="selectAnswer(question.id, option.id, question.type === 'multiple_choice')"
                    :checked="isAnswerSelected(question.id, option.id)" :disabled="isTestSubmitted(test.id)"
                    class="w-4 h-4 text-blue-600 disabled:opacity-50">
                  <span class="text-sm text-slate-700">{{ option.option_text }}</span>
                </label>
              </div>

              <!-- Text Answer -->
              <div v-else>
                <textarea v-model="selectedAnswers[question.id]" rows="3" :disabled="isTestSubmitted(test.id)"
                  class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                  :placeholder="$t('training.lessonDetail.feedbackPlaceholder')"></textarea>
              </div>
            </div>
          </div>

          <!-- Submit Test Button -->
          <div class="mt-6 flex justify-end">
            <button @click="submitTest(test.id)" :disabled="isTestSubmitted(test.id) || !canSubmitTest(test)"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium">
              {{ isTestSubmitted(test.id) ? $t('training.lessonDetail.testSubmitted') :
                $t('training.lessonDetail.submitTest') }}
            </button>
          </div>
        </div>

        <!-- Feedback Section -->
        <div v-if="tutorial?.feedback_enabled" class="bg-slate-50 rounded-xl p-6 border border-slate-100">
          <div class="flex items-start gap-2 mb-4">
            <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-slate-800">{{ $t('training.lessonDetail.leaveFeedback') }}</h3>
              <p v-if="isFeedbackAttempted" class="text-sm text-green-600 font-medium mt-1">✓ {{
                $t('training.lessonDetail.feedbackSent') }}
              </p>
            </div>
          </div>
          <p class="text-sm text-slate-600 mb-4 whitespace-pre-line">{{ lesson.feedback_text }}</p>
          <textarea v-model="feedbackText" rows="4" :disabled="isFeedbackAttempted"
            class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
            :placeholder="$t('training.lessonDetail.feedbackPlaceholder')"></textarea>
          <div class="mt-4 flex justify-end">
            <button @click="submitFeedbackForm" :disabled="isFeedbackAttempted || !feedbackText.trim()"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium">
              {{ isFeedbackAttempted ? $t('training.lessonDetail.sent') : $t('training.lessonDetail.send') }}
            </button>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between pt-6 border-t border-gray-200">
          <button @click="goBack"
            class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
            {{ $t('training.course.backToCourses') }}
          </button>
          <!-- <button @click="goToNextLesson"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            {{ $t('training.lesson.nextLesson') }}
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { fetchTutorialDetail, submitTestAttempt, submitFeedback } from '../../services/trainingService';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const blockId = computed(() => route.params.blockId);
const directionId = computed(() => route.params.directionId);
const lessonId = computed(() => route.params.lessonId);
const lessonNumber = computed(() => 1); // Can be calculated based on position

// Data refs
const tutorial = ref(null);
const loading = ref(true);
const error = ref(null);

// Accordion state for files
const openFiles = ref([]);
// PDF loading state: index → boolean
const pdfLoading = ref({});

const toggleFile = (index) => {
  const i = openFiles.value.indexOf(index);
  if (i > -1) {
    openFiles.value.splice(i, 1);
  } else {
    openFiles.value.push(index);
    // PDF bo'lsa loading ni true qilib qo'y
    const file = lesson.value?.files?.[index];
    if (file && isPdf(file.ext)) {
      pdfLoading.value[index] = true;
    }
  }
};

// File type helpers
const isPdf = (ext) => ['PDF'].includes((ext || '').toUpperCase());
const isImage = (ext) => ['PNG', 'JPG', 'JPEG', 'GIF', 'WEBP', 'SVG', 'BMP'].includes((ext || '').toUpperCase());
const isVideo = (ext) => ['MP4', 'MOV', 'AVI', 'WEBM', 'MKV', 'OGG'].includes((ext || '').toUpperCase());
const isViewable = (ext) => isPdf(ext) || isImage(ext) || isVideo(ext);

const fileIconClass = (ext) => {
  const e = (ext || '').toUpperCase();
  if (isPdf(e)) return 'bg-red-50 text-red-600';
  if (isImage(e)) return 'bg-green-50 text-green-600';
  if (isVideo(e)) return 'bg-purple-50 text-purple-600';
  return 'bg-blue-50 text-blue-600';
};

// Cache key for sessionStorage
const getCacheKey = () => `tutorial_detail_${route.params.lessonId}`;

// Load cached data from sessionStorage
const loadCachedData = () => {
  try {
    const cached = sessionStorage.getItem(getCacheKey());
    if (cached) {
      const data = JSON.parse(cached);
      tutorial.value = data.tutorial;
      lesson.value = data.lesson;
      selectedAnswers.value = data.selectedAnswers || {};
      feedbackText.value = data.feedbackText || '';
      testSubmitted.value = data.testSubmitted || false;
      feedbackSubmitted.value = data.feedbackSubmitted || false;
      return true;
    }
  } catch (err) {
    console.error('Failed to load cached tutorial:', err);
  }
  return false;
};

// Save data to sessionStorage
const saveCachedData = () => {
  try {
    sessionStorage.setItem(getCacheKey(), JSON.stringify({
      tutorial: tutorial.value,
      lesson: lesson.value,
      selectedAnswers: selectedAnswers.value,
      feedbackText: feedbackText.value,
      testSubmitted: testSubmitted.value,
      feedbackSubmitted: feedbackSubmitted.value
    }));
  } catch (err) {
    console.error('Failed to cache tutorial:', err);
  }
};

// Test state
const selectedAnswers = ref({});
const testResult = ref(null);

// Feedback state
const feedbackText = ref('');
const feedbackSubmitted = ref(false);

// Har bir test uchun alohida submitted holat (local Set)
const submittedTests = ref(new Set());

// Test yuborilganmi yoki yo'qmi (API + local)
const isTestSubmitted = (testId) => {
  if (submittedTests.value.has(testId)) return true;
  const test = tutorial.value?.tests?.find(t => t.id === testId);
  return test?.attempted === true;
};

// Check if feedback already attempted from API
const isFeedbackAttempted = computed(() => tutorial.value?.feedback_attempted || false);

// Check if all questions are answered for a test
const areAllQuestionsAnswered = (test) => {
  if (!test || !test.questions) return false;
  return test.questions.every(question => {
    if (question.type === 'text') {
      return selectedAnswers.value[question.id] && selectedAnswers.value[question.id].trim().length > 0;
    } else {
      return selectedAnswers.value[question.id] && selectedAnswers.value[question.id].length > 0;
    }
  });
};

// Check if submit button should be enabled for a specific test
const canSubmitTest = (test) => {
  return !isTestSubmitted(test.id) && areAllQuestionsAnswered(test);
};

// Computed lesson data
const lesson = computed(() => {
  if (!tutorial.value) {
    return {
      title: t('common.loading'),
      duration: 0,
      content: '',
      videoUrl: null,
      videoType: 'native',
      files: [],
      isRead: false
    };
  }

  return {
    title: tutorial.value.name,
    duration: tutorial.value.videos?.[0]?.duration_seconds ? Math.ceil(tutorial.value.videos[0].duration_seconds / 60) : 0,
    content: tutorial.value.description || '',
    // Barcha videolar array sifatida
    videos: tutorial.value.videos?.map(v => ({
      stream_url: v.stream_url || (v.video_file_path ? `https://api.lms.inter-ai.uz/storage/${v.video_file_path}` : null),
      description: v.description ? v.description.replace(/^"|"$/g, '') : '', // qo'shtirnoqlarni olib tashlash
      duration_seconds: v.duration_seconds
    })) || [],
    // eski videoUrl (backward compat)
    videoUrl: tutorial.value.videos?.[0]?.stream_url ||
      (tutorial.value.videos?.[0]?.video_file_path
        ? `https://api.lms.inter-ai.uz/storage/${tutorial.value.videos[0].video_file_path}`
        : null),
    videoType: 'native',
    files: tutorial.value.files?.map(file => ({
      name: file.description || file.file_path?.split('/').pop() || 'File',
      ext: file.file_path?.split('.').pop()?.toUpperCase() || 'FILE',
      size: '0 KB',
      url: `https://api.lms.inter-ai.uz/storage/${file.file_path}`
    })) || [],
    feedback_text: tutorial.value.feedback_text || '',
    isRead: false
  };
});

// Tests data
const tests = computed(() => tutorial.value?.tests || []);

// Load tutorial detail
const loadTutorialDetail = async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetchTutorialDetail(lessonId.value);

    if (response.success && response.data) {
      tutorial.value = response.data;

      // API dan kelgan attempted holatlarini submittedTests ga o'tkazish
      response.data.tests?.forEach(test => {
        if (test.attempted) submittedTests.value.add(test.id);
      });

      feedbackSubmitted.value = response.data.feedback_attempted || false;

      // Save to cache
      saveCachedData();
    }
  } catch (err) {
    console.error('Failed to load tutorial detail:', err);
    error.value = t('common.error'); // Or specific error key if available
  } finally {
    loading.value = false;
  }
};

// Handle answer selection
const selectAnswer = (questionId, optionId, isMultiple) => {
  // Agar bu savol tegishli test allaqachon yuborilgan bo'lsa, o'zgartirma
  // (template darajasida disabled bo'lgani uchun bu qo'shimcha himoya)
  if (isMultiple) {
    if (!selectedAnswers.value[questionId]) {
      selectedAnswers.value[questionId] = [];
    }
    const index = selectedAnswers.value[questionId].indexOf(optionId);
    if (index > -1) {
      selectedAnswers.value[questionId].splice(index, 1);
    } else {
      selectedAnswers.value[questionId].push(optionId);
    }
  } else {
    selectedAnswers.value[questionId] = [optionId];
  }
};

// Check if answer is selected
const isAnswerSelected = (questionId, optionId) => {
  return selectedAnswers.value[questionId]?.includes(optionId) || false;
};

// Submit test
const submitTest = async (testId) => {
  try {
    // Faqat shu testga tegishli savol ID larini olamiz
    const testObj = tutorial.value?.tests?.find(t => t.id === testId);
    if (!testObj) return;

    const testQuestionIds = new Set(testObj.questions.map(q => q.id));

    const answers = Object.keys(selectedAnswers.value)
      .filter(questionId => testQuestionIds.has(parseInt(questionId)))
      .map(questionId => ({
        question_id: parseInt(questionId),
        option_ids: selectedAnswers.value[questionId]
      }));

    const response = await submitTestAttempt(lessonId.value, testId, answers);

    if (response.success) {
      // Faqat shu testni submitted deb belgilaymiz
      submittedTests.value.add(testId);
      testResult.value = response.data;

      // Save to cache so it persists across page reloads
      saveCachedData();
      alert(t('training.lessonDetail.testSuccess'));
    } else {
      alert(response.message || t('training.lessonDetail.testError'));
    }
  } catch (err) {
    console.error('Failed to submit test:', err);
    alert(t('training.lessonDetail.testError'));
  }
};

// Submit feedback
const submitFeedbackForm = async () => {
  if (!feedbackText.value.trim()) {
    alert(t('training.lessonDetail.enterFeedback'));
    return;
  }

  try {
    const response = await submitFeedback(lessonId.value, feedbackText.value);

    if (response.success) {
      feedbackSubmitted.value = true;

      // Update tutorial feedback_attempted flag to persist the state
      if (tutorial.value) {
        tutorial.value.feedback_attempted = true;
      }

      // Save to cache so it persists across page reloads
      saveCachedData();
      alert(t('training.lessonDetail.feedbackSuccess'));
      feedbackText.value = '';
    }
  } catch (err) {
    console.error('Failed to submit feedback:', err);
    alert(t('training.lessonDetail.feedbackError'));
  }
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

const goToNextLesson = () => {
  // TODO: Navigate to next lesson
  console.log('Go to next lesson');
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
  await loadTutorialDetail();
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
