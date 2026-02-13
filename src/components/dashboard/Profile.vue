<template>
  <main class="p-10 flex-1 w-full overflow-x-hidden">
    <div class="space-y-8 pb-10">
      <div
        class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 opacity-10 -translate-y-8 translate-x-8 rounded-full bg-blue-600">
        </div>
        <div class="w-32 h-32 rounded-3xl flex items-center justify-center shadow-inner bg-blue-100 text-blue-600">
          <span class="text-4xl font-black">TMIo</span>
        </div>
        <div class="flex-1 text-center md:text-left z-10">
          <h1 class="text-3xl font-black text-slate-800 flex items-center justify-center md:justify-start gap-3">
            {{ userData.fullName }}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-user text-blue-500" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg></h1>
          <p class="text-blue-600 font-bold mt-1 uppercase tracking-wider text-sm">Mutaxassis • Chakana kredit
            amaliyotlarini muvofiqllashshirish departamenti</p>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div
              class="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-500 border border-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-graduation-cap" aria-hidden="true">
                <path
                  d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                </path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg> {{ $t('dashboard.profile.education') }}
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full text-xs font-bold text-green-600 border border-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-trending-up" aria-hidden="true">
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg> KPI: 70%
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border bg-blue-50 text-blue-600 border-blue-100">
              {{ $t('dashboard.profile.gender') }}</div>
          </div>
        </div>
        <div class="text-right hidden xl:block z-10">
          <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">{{ $t('dashboard.profile.monthlySalary')
            }}</p>
          <p class="text-2xl font-black text-slate-800">6,316,294 UZS</p>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 class="text-xl font-bold mb-6 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="lucide lucide-award text-yellow-500" aria-hidden="true">
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
              </path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg> {{ $t('dashboard.profile.skillsAnalysis') }}</h2>
          <div class="h-80">
            <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;">
              <div style="width: 0px; height: 0px; overflow: visible;">
                <div width="464" height="280" class="recharts-wrapper"
                  style="position: relative; cursor: default; width: 464px; height: 280px;"><svg cx="50%" cy="50%"
                    role="application" tabindex="0" class="recharts-surface" width="464" height="280"
                    viewBox="0 0 464 280" style="width: 100%; height: 100%; display: block;">
                    <title></title>
                    <desc></desc>
                    <g tabindex="-1">
                      <g class="recharts-polar-grid">
                        <g class="recharts-polar-grid-concentric">
                          <path stroke="#ccc" fill="none" cx="232" cy="140" radius="0"
                            class="recharts-polar-grid-concentric-polygon"
                            d="M 232,140L 232,140L 232,140L 232,140L 232,140Z"></path>
                          <path stroke="#ccc" fill="none" cx="232" cy="140" radius="27"
                            class="recharts-polar-grid-concentric-polygon"
                            d="M 232,113L 257.6785259399691,131.6565411518764L 247.87020181189678,161.8434588481236L 216.12979818810322,161.8434588481236L 206.32147406003085,131.6565411518764Z">
                          </path>
                          <path stroke="#ccc" fill="none" cx="232" cy="140" radius="54"
                            class="recharts-polar-grid-concentric-polygon"
                            d="M 232,86L 283.3570518799383,123.31308230375284L 263.74040362379355,183.68691769624718L 200.25959637620645,183.68691769624718L 180.6429481200617,123.31308230375285Z">
                          </path>
                          <path stroke="#ccc" fill="none" cx="232" cy="140" radius="81"
                            class="recharts-polar-grid-concentric-polygon"
                            d="M 232,59L 309.0355778199074,114.96962345562926L 279.61060543569033,205.53037654437074L 184.38939456430967,205.53037654437074L 154.96442218009255,114.96962345562928Z">
                          </path>
                          <path stroke="#ccc" fill="none" cx="232" cy="140" radius="108"
                            class="recharts-polar-grid-concentric-polygon"
                            d="M 232,32L 334.7141037598766,106.62616460750567L 295.4808072475871,227.37383539249433L 168.51919275241292,227.37383539249433L 129.2858962401234,106.6261646075057Z">
                          </path>
                        </g>
                        <g class="recharts-polar-grid-angle">
                          <line stroke="#ccc" cx="232" cy="140" x1="232" y1="140" x2="232" y2="32"></line>
                          <line stroke="#ccc" cx="232" cy="140" x1="232" y1="140" x2="334.7141037598766"
                            y2="106.62616460750567"></line>
                          <line stroke="#ccc" cx="232" cy="140" x1="232" y1="140" x2="295.4808072475871"
                            y2="227.37383539249433"></line>
                          <line stroke="#ccc" cx="232" cy="140" x1="232" y1="140" x2="168.51919275241292"
                            y2="227.37383539249433"></line>
                          <line stroke="#ccc" cx="232" cy="140" x1="232" y1="140" x2="129.2858962401234"
                            y2="106.6261646075057"></line>
                        </g>
                      </g>
                    </g>
                    <g tabindex="-1"></g>
                    <defs>
                      <clipPath id="recharts1-clip">
                        <rect x="5" y="5" height="270" width="454"></rect>
                      </clipPath>
                    </defs>
                    <g tabindex="-1">
                      <g class="recharts-layer recharts-radar">
                        <g class="recharts-layer recharts-radar-polygon">
                          <path name="Siz" stroke="#3b82f6" fill="#3b82f6" fill-opacity="0.6" id="recharts-radar-_r_0_"
                            class="recharts-polygon"
                            d="M232,79.52L293.6285,119.9757L276.4366,201.1617L221.8431,153.9798L182.6972,123.9806L232,79.52Z">
                          </path>
                        </g>
                      </g>
                    </g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1">
                      <g class="recharts-layer recharts-polar-angle-axis angleAxis">
                        <path angle="0" cx="232" cy="140" orientation="outer" radius="108" fill="none"
                          class="recharts-polygon recharts-polar-angle-axis-line"
                          d="M232,32L334.7141,106.6262L295.4808,227.3738L168.5192,227.3738L129.2859,106.6262L232,32Z">
                        </path>
                        <g class="recharts-layer recharts-polar-angle-axis-ticks">
                          <g class="recharts-layer recharts-polar-angle-axis-tick">
                            <line class="recharts-polar-angle-axis-tick-line" angle="0" cx="232" cy="140"
                              orientation="outer" radius="108" fill="none" x1="232" y1="32" x2="232" y2="24"></line>
                            <text cx="232" cy="140" orientation="outer" radius="108" stroke="none" x="232" y="24"
                              class="recharts-text recharts-polar-angle-axis-tick-value" text-anchor="middle"
                              fill="#808080">
                              <tspan x="232" dy="0em">Hard Skills</tspan>
                            </text>
                          </g>
                          <g class="recharts-layer recharts-polar-angle-axis-tick">
                            <line class="recharts-polar-angle-axis-tick-line" angle="0" cx="232" cy="140"
                              orientation="outer" radius="108" fill="none" x1="334.7141037598766"
                              y1="106.62616460750567" x2="342.3225558902378" y2="104.1540286525061"></line><text
                              cx="232" cy="140" orientation="outer" radius="108" stroke="none" x="342.3225558902378"
                              y="104.1540286525061" class="recharts-text recharts-polar-angle-axis-tick-value"
                              text-anchor="start" fill="#808080">
                              <tspan x="342.3225558902378" dy="0.355em">Soft Skills</tspan>
                            </text>
                          </g>
                          <g class="recharts-layer recharts-polar-angle-axis-tick">
                            <line class="recharts-polar-angle-axis-tick-line" angle="0" cx="232" cy="140"
                              orientation="outer" radius="108" fill="none" x1="295.4808072475871"
                              y1="227.37383539249433" x2="300.18308926592687" y2="233.8459713474939"></line><text
                              cx="232" cy="140" orientation="outer" radius="108" stroke="none" x="300.18308926592687"
                              y="233.8459713474939" class="recharts-text recharts-polar-angle-axis-tick-value"
                              text-anchor="start" fill="#808080">
                              <tspan x="300.18308926592687" dy="0.71em">KPI</tspan>
                            </text>
                          </g>
                          <g class="recharts-layer recharts-polar-angle-axis-tick">
                            <line class="recharts-polar-angle-axis-tick-line" angle="0" cx="232" cy="140"
                              orientation="outer" radius="108" fill="none" x1="168.51919275241292"
                              y1="227.37383539249433" x2="163.81691073407313" y2="233.8459713474939"></line><text
                              cx="232" cy="140" orientation="outer" radius="108" stroke="none" x="163.81691073407313"
                              y="233.8459713474939" class="recharts-text recharts-polar-angle-axis-tick-value"
                              text-anchor="end" fill="#808080">
                              <tspan x="163.81691073407313" dy="0.71em">English</tspan>
                            </text>
                          </g>
                          <g class="recharts-layer recharts-polar-angle-axis-tick">
                            <line class="recharts-polar-angle-axis-tick-line" angle="0" cx="232" cy="140"
                              orientation="outer" radius="108" fill="none" x1="129.2858962401234" y1="106.6261646075057"
                              x2="121.67744410976218" y2="104.15402865250611"></line><text cx="232" cy="140"
                              orientation="outer" radius="108" stroke="none" x="121.67744410976218"
                              y="104.15402865250611" class="recharts-text recharts-polar-angle-axis-tick-value"
                              text-anchor="end" fill="#808080">
                              <tspan x="121.67744410976218" dy="0.355em">Russian</tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                      <g class="recharts-layer recharts-polar-radius-axis radiusAxis">
                        <line class="recharts-polar-radius-axis-line" orientation="right" stroke="#ccc" fill="none"
                          x1="232" y1="140" x2="340" y2="140"></line>
                        <g class="recharts-layer recharts-polar-radius-axis-ticks">
                          <g class="recharts-layer recharts-polar-radius-axis-tick"><text
                              transform="rotate(90, 232, 140)" orientation="right" cx="232" cy="140" stroke="none"
                              x="232" y="140" class="recharts-text recharts-polar-radius-axis-tick-value"
                              text-anchor="start" fill="#ccc">
                              <tspan x="232" dy="0em">0</tspan>
                            </text></g>
                          <g class="recharts-layer recharts-polar-radius-axis-tick"><text
                              transform="rotate(90, 259, 140)" orientation="right" cx="232" cy="140" stroke="none"
                              x="259" y="140" class="recharts-text recharts-polar-radius-axis-tick-value"
                              text-anchor="start" fill="#ccc">
                              <tspan x="259" dy="0em">25</tspan>
                            </text></g>
                          <g class="recharts-layer recharts-polar-radius-axis-tick"><text
                              transform="rotate(90, 286, 140)" orientation="right" cx="232" cy="140" stroke="none"
                              x="286" y="140" class="recharts-text recharts-polar-radius-axis-tick-value"
                              text-anchor="start" fill="#ccc">
                              <tspan x="286" dy="0em">50</tspan>
                            </text></g>
                          <g class="recharts-layer recharts-polar-radius-axis-tick"><text
                              transform="rotate(90, 313, 140)" orientation="right" cx="232" cy="140" stroke="none"
                              x="313" y="140" class="recharts-text recharts-polar-radius-axis-tick-value"
                              text-anchor="start" fill="#ccc">
                              <tspan x="313" dy="0em">75</tspan>
                            </text></g>
                          <g class="recharts-layer recharts-polar-radius-axis-tick"><text
                              transform="rotate(90, 340, 140)" orientation="right" cx="232" cy="140" stroke="none"
                              x="340" y="140" class="recharts-text recharts-polar-radius-axis-tick-value"
                              text-anchor="start" fill="#ccc">
                              <tspan x="340" dy="0em">100</tspan>
                            </text></g>
                        </g>
                      </g>
                    </g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                    <g tabindex="-1"></g>
                  </svg></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 class="text-xl font-bold mb-6 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="lucide lucide-book text-blue-600" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
            </svg> {{ $t('dashboard.profile.testResults') }}</h2>
          <div class="space-y-4 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
            <!-- Loading State -->
            <div v-if="loading" class="p-4 bg-slate-50 rounded-2xl border border-slate-100 animate-pulse">
              <div class="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div class="h-4 bg-slate-200 rounded w-1/2"></div>
            </div>

            <!-- No Data State -->
            <div v-else-if="!recentAttempts || recentAttempts.length === 0"
              class="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <p class="text-sm text-slate-500">{{ $t('dashboard.profile.noTests') }}</p>
            </div>

            <!-- Recent Attempts from API -->
            <div v-else v-for="attempt in recentAttempts" :key="attempt.id"
              class="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:bg-white transition-all">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="font-bold text-slate-800">{{ attempt.tutorial?.name || 'Test' }}</h4>
                  <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{{
                    formatDate(attempt.created_at) }}</p>
                </div>
                <div class="px-4 py-1.5 rounded-xl font-black text-sm shadow-sm"
                  :class="getScoreClass(attempt.correct_count, attempt.total_questions)">
                  {{ attempt.correct_count }}/{{ attempt.total_questions }}
                </div>
              </div>
              <div v-if="attempt.incorrect_count > 0" class="pt-2 border-t border-slate-200">
                <p class="text-[10px] font-black text-red-500 uppercase mb-2 tracking-widest">{{
                  $t('dashboard.profile.errorAnalysis') }}:</p>
                <ul class="space-y-1">
                  <li class="text-xs text-slate-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-circle-x text-red-400" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    {{ attempt.incorrect_count }} {{ $t('dashboard.profile.wrongAnswer') }}
                  </li>
                  <li v-if="attempt.pending_count > 0" class="text-xs text-slate-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-clock text-yellow-400" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ attempt.pending_count }} {{ $t('dashboard.profile.unchecked') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="px-4 py-1.5 rounded-xl font-black text-sm bg-green-100 text-green-700 shadow-sm">7/10
          </div> -->
        </div>
        <div class="pt-2 border-t border-slate-200">
          <p class="text-[10px] font-black text-red-500 uppercase mb-2 tracking-widest">{{
            $t('dashboard.profile.errorAnalysis') }}:</p>
          <ul class="space-y-1">
            <li class="text-xs text-slate-600 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg"
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x text-red-400"
                aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg> {{ $t('dashboard.profile.wrongAnswer') }} #2: AI tavsiya qilgan mavzu ustida ishlang.</li>
            <li class="text-xs text-slate-600 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg"
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x text-red-400"
                aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg> {{ $t('dashboard.profile.wrongAnswer') }} #5: AI tavsiya qilgan mavzu ustida ishlang.</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Radar } from 'vue-chartjs';
import { fetchDashboard } from '../../services/trainingService';
import { getCurrentUser, fetchUser } from '../../services/authService';
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

const { t } = useI18n();

// Get current user from localStorage
const currentUser = getCurrentUser();

// Dynamic user data from API
const userData = ref({
  fullName: currentUser ? `${currentUser.first_name || currentUser.firstname} ${currentUser.last_name || currentUser.lastname}` : 'User',
  position: 'MUTAXASSIS',
  department: 'XODIMLARNI BOSHQARISH DEPARTAMENTI',
  kpi: 77,
  salary: 6316294
});

const loadUserData = async () => {
  const user = await fetchUser();
  if (user) {
    // Use 'name' from API if available, otherwise construct from parts
    if (user.name) {
      userData.value.fullName = user.name;
    } else {
      const fname = user.first_name || user.firstname || 'User';
      const lname = user.last_name || user.lastname || '';
      userData.value.fullName = `${fname} ${lname}`.trim();
    }

    // Update other fields if available in API
    if (user.role) userData.value.position = user.role.toUpperCase();
    if (user.department) userData.value.department = user.department.toUpperCase();
    if (user.phone) userData.value.phone = user.phone; // Store phone if needed
  }
};

// Dashboard data from API
const dashboardData = ref(null);
const loading = ref(true);
const error = ref(null);

// Computed properties for dashboard data
const recentAttempts = computed(() => dashboardData.value?.recent_attempts || []);
const recommendedTutorials = computed(() => dashboardData.value?.recommended_tutorials || []);
const recentFeedbacks = computed(() => dashboardData.value?.recent_feedbacks || []);
const stats = computed(() => dashboardData.value?.stats || {});

const userInitials = computed(() => {
  const names = userData.value.fullName.split(' ');
  return names[0]?.charAt(0) + (names[1]?.charAt(0) || '');
});

// Skills chart data
const skillsChartData = computed(() => ({
  labels: [
    'Hard Skills',
    'Soft Skills',
    t('dashboard.profile.russian'),
    t('dashboard.profile.english'),
    t('dashboard.profile.kpi')
  ],
  datasets: [
    {
      label: t('dashboard.profile.skills'),
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
}));

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
        label: function (context) {
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

// Format salary with thousand separators
const formatSalary = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format date
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('uz-UZ', { year: 'numeric', month: '2-digit', day: '2-digit' });
};

// Get score class based on correct/total ratio
const getScoreClass = (correct, total) => {
  const percentage = (correct / total) * 100;
  if (percentage >= 80) return 'bg-green-100 text-green-700';
  if (percentage >= 60) return 'bg-yellow-100 text-yellow-700';
  return 'bg-red-100 text-red-700';
};

// Load dashboard data
const loadDashboard = async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetchDashboard();

    if (response.success && response.data) {
      dashboardData.value = response.data;
    }
  } catch (err) {
    console.error('Failed to load dashboard:', err);
    error.value = 'Dashboard ma\'lumotlarini yuklashda xatolik';
  } finally {
    loading.value = false;
  }
};

// Load data on mount
onMounted(async () => {
  await Promise.all([loadDashboard(), loadUserData()]);
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
