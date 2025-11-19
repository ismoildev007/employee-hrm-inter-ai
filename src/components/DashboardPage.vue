<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { Trophy, Clock, MessageSquare, Brain, Code, CheckCircle, ArrowRight } from 'lucide-vue-next'

// ApexCharts component
const ApexChart = VueApexCharts

// Time range
const timeRange = ref<'1w' | '1m' | '3m' | '6m' | '12m'>('1m')

const ranges = [
  { value: '1w', label: '1 Hafta' },
  { value: '1m', label: '1 Oy' },
  { value: '3m', label: '3 Oy' },
  { value: '6m', label: '6 Oy' },
  { value: '12m', label: '12 Oy' },
]

// Data map (to'liq variant)
const dataMap: Record<string, any[]> = {
  '1w': [
    { period: 'Dush', time: 4.5, interview: 75, test: 80, code: 70, notes: 3 },
    { period: 'Sesh', time: 3.2, interview: 78, test: 82, code: 72, notes: 2 },
    { period: 'Chor', time: 5.1, interview: 80, test: 85, code: 75, notes: 4 },
    { period: 'Pay', time: 4.8, interview: 82, test: 87, code: 78, notes: 3 },
    { period: 'Jum', time: 6.2, interview: 85, test: 90, code: 80, notes: 5 },
    { period: 'Shan', time: 3.5, interview: 85, test: 88, code: 82, notes: 2 },
    { period: 'Yak', time: 2.8, interview: 85, test: 90, code: 85, notes: 1 },
  ],
  '1m': [
    { period: 'H1', time: 25, interview: 70, test: 75, code: 68, notes: 12 },
    { period: 'H2', time: 28, interview: 75, test: 78, code: 72, notes: 15 },
    { period: 'H3', time: 32, interview: 78, test: 82, code: 75, notes: 18 },
    { period: 'H4', time: 35, interview: 85, test: 90, code: 85, notes: 20 },
  ],
  '3m': [
    { period: 'Sen', time: 85, interview: 65, test: 70, code: 60, notes: 35 },
    { period: 'Okt', time: 95, interview: 72, test: 78, code: 70, notes: 42 },
    { period: 'Noy', time: 105, interview: 85, test: 90, code: 85, notes: 48 },
  ],
  '6m': [
    { period: 'Iyun', time: 72, interview: 55, test: 60, code: 50, notes: 28 },
    { period: 'Iyul', time: 78, interview: 60, test: 65, code: 55, notes: 32 },
    { period: 'Avg', time: 82, interview: 65, test: 70, code: 60, notes: 35 },
    { period: 'Sen', time: 85, interview: 72, test: 78, code: 70, notes: 42 },
    { period: 'Okt', time: 95, interview: 78, test: 82, code: 75, notes: 45 },
    { period: 'Noy', time: 105, interview: 85, test: 90, code: 85, notes: 48 },
  ],
  '12m': [
    { period: 'Dek', time: 45, interview: 45, test: 50, code: 40, notes: 15 },
    { period: 'Yan', time: 50, interview: 48, test: 52, code: 42, notes: 18 },
    { period: 'Fev', time: 55, interview: 50, test: 55, code: 45, notes: 20 },
    { period: 'Mar', time: 60, interview: 52, test: 58, code: 48, notes: 22 },
    { period: 'Apr', time: 65, interview: 55, test: 60, code: 50, notes: 25 },
    { period: 'May', time: 70, interview: 58, test: 65, code: 55, notes: 28 },
    { period: 'Iyun', time: 72, interview: 60, test: 68, code: 58, notes: 30 },
    { period: 'Iyul', time: 78, interview: 65, test: 72, code: 62, notes: 35 },
    { period: 'Avg', time: 82, interview: 70, test: 75, code: 68, notes: 38 },
    { period: 'Sen', time: 85, interview: 75, test: 80, code: 72, notes: 42 },
    { period: 'Okt', time: 95, interview: 80, test: 85, code: 78, notes: 45 },
    { period: 'Noy', time: 105, interview: 85, test: 90, code: 85, notes: 48 },
  ]
}

const chartData = computed(() => dataMap[timeRange.value] || dataMap['1m'])
const latestData = computed(() => chartData.value[chartData.value.length - 1])
const previousData = computed(() =>
    chartData.value.length > 1 ? chartData.value[chartData.value.length - 2] : chartData.value[chartData.value.length - 1]
)

const growPercent = (now: number, prev: number) =>
    prev ? ((now - prev) / prev * 100).toFixed(1) : '0.0'

// Growth
const timeSpentGrowth = computed(() => growPercent(latestData.value.time, previousData.value.time))
const interviewGrowth = computed(() => (latestData.value.interview - previousData.value.interview).toFixed(1))
const testGrowth = computed(() => (latestData.value.test - previousData.value.test).toFixed(1))
const codeGrowth = computed(() => (latestData.value.code - previousData.value.code).toFixed(1))

// Current level
const currentLevel = {
  level: 'Middle Developer',
  xp: 2450,
  nextLevelXp: 3000,
  percentage: (2450 / 3000) * 100
}

// Skills
const skills = [
  { name: 'React', level: 85, timeInvested: '120 soat' },
  { name: 'TypeScript', level: 75, timeInvested: '80 soat' },
  { name: 'Node.js', level: 65, timeInvested: '60 soat' },
  { name: 'System Design', level: 50, timeInvested: '40 soat' },
  { name: 'Algorithms', level: 60, timeInvested: '70 soat' },
]

// Badges
const badges = [
  { name: 'First Steps', icon: '🎯', earned: true },
  { name: 'Week Streak', icon: '🔥', earned: true },
  { name: 'Test Master', icon: '📝', earned: true },
  { name: 'Code Ninja', icon: '💻', earned: false },
  { name: 'Interview Pro', icon: '🎤', earned: false },
  { name: 'Senior Path', icon: '🏆', earned: false },
]

// Roadmap
const roadmapSteps = [
  { title: 'Complete 5 skill tests', completed: true },
  { title: 'Build 3 pet-projects', completed: true },
  { title: 'Pass mock interview (General)', completed: true },
  { title: 'Pass mock interview (Technical)', completed: false },
  { title: 'Get 2 certifications', completed: false },
  { title: 'Contribute to open source', completed: false },
]

const completedSteps = computed(() => roadmapSteps.filter(s => s.completed).length)
const roadmapProgress = computed(() => (completedSteps.value / roadmapSteps.length) * 100)

// Charts (options + series)
const commonChartOptions = computed(() => ({
  chart: { toolbar: { show: false } },
  dataLabels: { enabled: false },
  grid: { strokeDashArray: 4 },
  xaxis: {
    categories: chartData.value.map(i => i.period)
  },
}))

const timeChartOptions = computed(() => ({
  ...commonChartOptions.value,
  stroke: { curve: 'smooth', width: 3 },
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 0.5, opacityFrom: 0.35, opacityTo: 0.0 }
  },
  colors: ['#3b82f6']
}))
const timeChartSeries = computed(() => [{
  name: 'Time',
  data: chartData.value.map(i => i.time)
}])

const interviewChartOptions = computed(() => ({
  ...commonChartOptions.value,
  stroke: { curve: 'smooth', width: 3 },
  colors: ['#10b981']
}))
const interviewChartSeries = computed(() => [{
  name: 'Interview',
  data: chartData.value.map(i => i.interview)
}])

const testCodeChartOptions = computed(() => ({
  ...commonChartOptions.value,
  plotOptions: {
    bar: { borderRadius: 8, columnWidth: '45%' }
  },
  colors: ['#a855f7', '#f97316']
}))
const testCodeChartSeries = computed(() => [
  { name: 'Test', data: chartData.value.map(i => i.test) },
  { name: 'Kod', data: chartData.value.map(i => i.code) },
])

const notesChartOptions = computed(() => ({
  ...commonChartOptions.value,
  stroke: { curve: 'smooth', width: 3 },
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 0.5, opacityFrom: 0.35, opacityTo: 0.0 }
  },
  colors: ['#8b5cf6']
}))
const notesChartSeries = computed(() => [{
  name: 'Notes',
  data: chartData.value.map(i => i.notes)
}])
</script>

<template>
  <div class="p-4 md:p-8">
    <!-- Header with Level -->
    <div class="mb-6 md:mb-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <div>
          <h1 class="text-2xl md:text-3xl mb-2">Dashboard</h1>
          <p class="text-gray-600">Karyera o'sishingizni kuzatib boring</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right">
            <div class="text-sm text-gray-600">Current Level</div>
            <div class="text-lg px-4 py-2 bg-blue-600 text-white rounded-md">
              {{ currentLevel.level }}
            </div>
          </div>
        </div>
      </div>

      <!-- XP Progress -->
      <div class="p-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <Trophy class="w-8 h-8 text-yellow-600" />
            <div>
              <div class="text-sm text-gray-600">Experience Points</div>
              <div class="text-2xl">
                {{ currentLevel.xp }} / {{ currentLevel.nextLevelXp }} XP
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-600">Senior darajasiga</div>
            <div class="text-lg">
              {{ currentLevel.nextLevelXp - currentLevel.xp }} XP qoldi
            </div>
          </div>
        </div>

        <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
              class="h-3 bg-blue-600 rounded-full"
              :style="{ width: currentLevel.percentage + '%' }"
          />
        </div>
      </div>
    </div>

    <!-- Time Range Filter -->
    <div class="flex items-center gap-2 mb-6">
      <span class="text-sm text-gray-600">Davr:</span>

      <div class="flex gap-2">
        <button
            v-for="range in ranges"
            :key="range.value"
            @click="timeRange = range.value"
            class="px-3 py-1.5 rounded-md text-sm border"
            :class="timeRange === range.value
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'"
        >
          {{ range.label }}
        </button>
      </div>
    </div>

    <!-- Main Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Time -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Clock class="w-6 h-6 text-blue-600" />
          </div>
          <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-md">
            +{{ timeSpentGrowth }}%
          </span>
        </div>
        <div class="text-3xl mb-1">{{ latestData.time }}h</div>
        <p class="text-sm text-gray-600">Platformada vaqt</p>
      </div>

      <!-- Interview -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <MessageSquare class="w-6 h-6 text-green-600" />
          </div>
          <span class="px-2 py-0.5 bg-green-100 text-green-700 text-sm rounded-md">
            +{{ interviewGrowth }}%
          </span>
        </div>
        <div class="text-3xl mb-1">{{ latestData.interview }}%</div>
        <p class="text-sm text-gray-600">Suhbat score</p>
      </div>

      <!-- Test -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Brain class="w-6 h-6 text-purple-600" />
          </div>
          <span class="px-2 py-0.5 bg-purple-100 text-purple-700 text-sm rounded-md">
            +{{ testGrowth }}%
          </span>
        </div>
        <div class="text-3xl mb-1">{{ latestData.test }}%</div>
        <p class="text-sm text-gray-600">Test to'g'riligi</p>
      </div>

      <!-- Code -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
            <Code class="w-6 h-6 text-orange-600" />
          </div>
          <span class="px-2 py-0.5 bg-orange-100 text-orange-700 text-sm rounded-md">
            +{{ codeGrowth }}%
          </span>
        </div>
        <div class="text-3xl mb-1">{{ latestData.code }}%</div>
        <p class="text-sm text-gray-600">Kod to'g'riligi</p>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid lg:grid-cols-2 gap-6 mb-8">
      <!-- Time Spent Chart -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <h2 class="text-xl mb-6">Platformada o'tkazilgan vaqt</h2>
        <ApexChart
            type="area"
            height="250"
            :options="timeChartOptions"
            :series="timeChartSeries"
        />
      </div>

      <!-- Interview Score Chart -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <h2 class="text-xl mb-6">Mock suhbat natijalari</h2>
        <ApexChart
            type="line"
            height="250"
            :options="interviewChartOptions"
            :series="interviewChartSeries"
        />
      </div>

      <!-- Test & Code Accuracy -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <h2 class="text-xl mb-6">Test va Kod to'g'riligi</h2>
        <ApexChart
            type="bar"
            height="250"
            :options="testCodeChartOptions"
            :series="testCodeChartSeries"
        />
        <div class="flex items-center justify-center gap-6 mt-4">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-purple-500 rounded" />
            <span class="text-sm">Test</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-orange-500 rounded" />
            <span class="text-sm">Kod</span>
          </div>
        </div>
      </div>

      <!-- Notes Growth -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <h2 class="text-xl mb-6">Zametka va Bilim O'sishi</h2>
        <ApexChart
            type="area"
            height="250"
            :options="notesChartOptions"
            :series="notesChartSeries"
        />
      </div>
    </div>

    <!-- Skills & Badges -->
    <div class="grid lg:grid-cols-3 gap-6 mb-8">
      <!-- Skills -->
      <div class="p-6 shadow-md rounded-xl bg-white lg:col-span-2">
        <h2 class="text-xl mb-6">Skill darajalari</h2>
        <div class="space-y-5">
          <div v-for="(skill, index) in skills" :key="index">
            <div class="flex items-center justify-between mb-2">
              <span>{{ skill.name }}</span>
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-600">{{ skill.timeInvested }}</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                    class="h-2 bg-blue-600 rounded-full"
                    :style="{ width: skill.level + '%' }"
                />
              </div>
              <span class="text-sm text-gray-600 w-10 text-right">
                {{ skill.level }}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Badges -->
      <div class="p-6 shadow-md rounded-xl bg-white">
        <h2 class="text-xl mb-6">Achievements</h2>
        <div class="grid grid-cols-3 gap-3">
          <div
              v-for="(badge, index) in badges"
              :key="index"
              class="aspect-square rounded-xl flex flex-col items-center justify-center"
              :class="badge.earned
              ? 'bg-gradient-to-br from-yellow-100 to-orange-100'
              : 'bg-gray-100'"
          >
            <div :class="['text-3xl mb-1', !badge.earned && 'grayscale opacity-50']">
              {{ badge.icon }}
            </div>
            <div
                :class="[
                'text-xs text-center',
                badge.earned ? 'text-gray-900' : 'text-gray-400'
              ]"
            >
              {{ badge.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Roadmap -->
    <div class="p-6 shadow-md rounded-xl bg-white mb-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-xl mb-1">Roadmap: Middle → Senior</h2>
          <p class="text-sm text-gray-600">
            {{ completedSteps }}/{{ roadmapSteps.length }} bajarildi
          </p>
        </div>
        <div class="text-2xl">
          {{ Math.round(roadmapProgress) }}%
        </div>
      </div>

      <div class="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
        <div
            class="h-2 bg-green-500 rounded-full"
            :style="{ width: roadmapProgress + '%' }"
        />
      </div>

      <div class="grid md:grid-cols-3 gap-3">
        <div
            v-for="(step, index) in roadmapSteps"
            :key="index"
            class="flex items-start gap-3 p-4 rounded-xl"
            :class="step.completed ? 'bg-green-50' : 'bg-gray-50'"
        >
          <div
              class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              :class="step.completed ? 'bg-green-600' : 'bg-gray-300'"
          >
            <CheckCircle
                v-if="step.completed"
                class="w-4 h-4 text-white"
            />
            <div v-else class="w-2 h-2 bg-white rounded-full" />
          </div>
          <span
              class="text-sm"
              :class="step.completed ? 'text-green-900' : 'text-gray-600'"
          >
            {{ step.title }}
          </span>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-6 shadow-md rounded-xl bg-white">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl mb-1">Sizga mos vakansiyalar</h2>
            <p class="text-sm text-gray-600">34 ta yangi vakansiya topildi</p>
          </div>

          <button class="inline-flex items-center gap-2 bg-blue-600 text-white px-3 h-9 rounded-md">
            Ko'rish
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>

      <div class="p-6 shadow-md rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl mb-1">Keyingi mock suhbat</h2>
            <p class="text-sm text-gray-600">3 kun ichida</p>
          </div>

          <button class="inline-flex items-center gap-2 border bg-white px-3 h-9 rounded-md">
            Tayyorgarlik
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>