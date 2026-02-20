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
          </div>
        </div>
      </div>

      <!-- Lesson Body -->
      <div class="p-4 sm:p-6 lg:p-8 space-y-8">
        <!-- Top Section: Video & Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <!-- Video Section -->
          <div v-if="lesson.videoUrl" class="rounded-xl overflow-hidden bg-black aspect-video relative group shadow-lg">
            <video v-if="lesson.videoType === 'native'" :src="lesson.videoUrl" controls preload="metadata"
              class="w-full h-full object-cover">
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
            {{ $t('training.lessonDetail.attachedFiles') }}
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
                  <p class="font-medium text-slate-700 truncate text-sm">File</p>
                  <!-- <p class="text-xs text-slate-400">{{ file.size }}</p> -->
                </div>
              </div>
              <a :href="file.url" target="_blank" download class="p-2 text-slate-400 hover:text-blue-600 transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
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
                count:
                  test.questions.length
              }) }}</p>
              <p v-if="isTestAttempted" class="text-sm text-green-600 font-medium mt-1">✓ {{
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
                    'hover:border-blue-300 hover:bg-blue-50/50': !isTestAttempted,
                    'opacity-60 cursor-not-allowed': isTestAttempted
                  }">
                  <input :type="question.type === 'single_choice' ? 'radio' : 'checkbox'"
                    :name="`question-${question.id}`" :value="option.id"
                    @change="selectAnswer(question.id, option.id, question.type === 'multiple_choice')"
                    :checked="isAnswerSelected(question.id, option.id)" :disabled="isTestAttempted"
                    class="w-4 h-4 text-blue-600 disabled:opacity-50">
                  <span class="text-sm text-slate-700">{{ option.option_text }}</span>
                </label>
              </div>

              <!-- Text Answer -->
              <div v-else>
                <textarea v-model="selectedAnswers[question.id]" rows="3" :disabled="isTestAttempted"
                  class="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                  :placeholder="$t('training.lessonDetail.feedbackPlaceholder')"></textarea>
              </div>
            </div>
          </div>

          <!-- Submit Test Button -->
          <div class="mt-6 flex justify-end">
            <button @click="submitTest(test.id)" :disabled="!canSubmitTest(test)"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium">
              {{ isTestAttempted ? $t('training.lessonDetail.testSubmitted') : $t('training.lessonDetail.submitTest') }}
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
          <p class="text-sm text-slate-600 mb-4">{{ lesson.feedback_text }}</p>
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
            {{ $t('training.lesson.backToCourse') }}
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
const testSubmitted = ref(false);
const testResult = ref(null);

// Feedback state
const feedbackText = ref('');
const feedbackSubmitted = ref(false);

// Check if test already attempted from API
const isTestAttempted = computed(() => tutorial.value?.test_attempted || false);

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
  return !isTestAttempted.value && areAllQuestionsAnswered(test);
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

      // Set submitted states from API
      testSubmitted.value = response.data.test_attempted || false;
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
  // Don't allow selection if test already attempted
  if (isTestAttempted.value) return;

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
    const answers = Object.keys(selectedAnswers.value).map(questionId => ({
      question_id: parseInt(questionId),
      option_ids: selectedAnswers.value[questionId]
    }));

    const response = await submitTestAttempt(lessonId.value, testId, answers);

    if (response.success) {
      testSubmitted.value = true;
      testResult.value = response.data;

      // Update tutorial test_attempted flag to persist the state
      if (tutorial.value) {
        tutorial.value.test_attempted = true;
      }

      // Save to cache so it persists across page reloads
      saveCachedData();
      alert(t('training.lessonDetail.testSuccess'));
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
