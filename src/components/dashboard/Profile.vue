<template>
  <div>
    <!-- User Profile Card -->
    <div class="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm mb-4 sm:mb-6">
      <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <!-- Avatar -->
        <div class="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span class="text-blue-600 font-bold text-2xl sm:text-3xl">{{ userInitials }}</span>
        </div>

        <!-- User Info -->
        <div class="flex-1 min-w-0">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">{{ $t('dashboard.profile.title') }}</h1>
          <p class="text-blue-600 text-xs sm:text-sm font-medium mb-3">
            {{ userData.position }} • {{ userData.department }}
          </p>
          
          <div class="flex flex-wrap items-center gap-3 sm:gap-6 mt-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-xs sm:text-sm text-gray-600">{{ $t('dashboard.profile.education') }}</span>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-xs sm:text-sm font-medium text-green-600 flex items-center gap-1">
                <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('dashboard.profile.kpi') }}: {{ userData.kpi }}%
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-xs sm:text-sm text-gray-600">{{ $t('dashboard.profile.gender') }}</span>
            </div>
          </div>
        </div>

        <!-- Salary -->
        <div class="w-full sm:w-auto text-left sm:text-right mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-200">
          <div class="text-left sm:text-right">
            <p class="text-xs text-gray-500 mb-1">{{ $t('dashboard.profile.monthlySalary') }}</p>
            <p class="text-lg sm:text-xl font-bold text-gray-900">{{ formatSalary(userData.salary) }} UZS</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Skills Chart -->
      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
        <h2 class="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {{ $t('dashboard.profile.skillsAnalysis') }}
        </h2>

        <div class="flex justify-center">
          <div class="w-full max-w-md">
            <Radar :data="skillsChartData" :options="skillsChartOptions" />
          </div>
        </div>
      </div>

      <!-- Test Results -->
      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
          </svg>
          <h2 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">{{ $t('dashboard.profile.testResults') }}</h2>
        </div>

        <!-- Test Score -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold text-gray-900">Kichik va o'rta biznes</h3>
            <span class="text-2xl font-bold text-green-600">{{ testResults.score }}/10</span>
          </div>
          <p class="text-sm text-gray-500 mb-4">{{ testResults.date }}</p>

          <!-- Errors List -->
          <div class="space-y-2">
            <p class="text-sm font-semibold text-red-600 mb-2">{{ $t('dashboard.profile.errorsAnalysis') }}</p>
            <div
              v-for="(error, index) in testResults.errors"
              :key="index"
              class="flex items-start gap-2 text-sm"
            >
              <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700">{{ error.question }}: {{ error.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
        <div class="flex items-center gap-3 sm:gap-4">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ $t('dashboard.profile.completedCourses') }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.completedCourses }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ $t('dashboard.profile.certificates') }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.certificates }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ $t('dashboard.profile.totalScore') }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.totalScore }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Static user data
const userData = ref({
  fullName: 'Tursunov Muhammadqodir Islomjon o\'g\'li',
  position: 'MUTAXASSIS',
  department: 'XODIMLARNI BOSHQARISH DEPARTAMENTI',
  kpi: 77,
  salary: 5254870
});

const userInitials = computed(() => {
  const names = userData.value.fullName.split(' ');
  return names[0]?.charAt(0) + (names[1]?.charAt(0) || '');
});

// Skills chart data
const skillsChartData = ref({
  labels: ['Hard Skills', 'Soft Skills', 'Russian', 'English', 'KPI'],
  datasets: [
    {
      label: 'Ko\'nikmalar',
      data: [85, 75, 60, 70, 77],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(59, 130, 246)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(59, 130, 246)'
    }
  ]
});

const skillsChartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      pointLabels: {
        font: {
          size: 12,
          weight: '500'
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return context.parsed.r + '%';
        }
      }
    }
  }
});

// Test results data
const testResults = ref({
  score: 8,
  date: '2024-03-01',
  errors: [
    {
      question: 'Savol #2',
      description: 'AI tavsiiya qilgan mavzu ustida ishlang.'
    },
    {
      question: 'Savol #5',
      description: 'AI tavsiiya qilgan mavzu ustida ishlang.'
    }
  ]
});

// Additional stats
const stats = ref({
  completedCourses: 12,
  certificates: 8,
  totalScore: 456
});

// Format salary with thousand separators
const formatSalary = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
