<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2 font-bold">Oylik Topshiriqlar</h1>
      <p class="text-gray-600">Har oy yangi topshiriqlar bilan ko'nikmalaringizni oshiring</p>
    </div>

    <!-- Progress Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      <div class="p-6 border rounded-lg shadow-md bg-white">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div class="text-2xl font-bold">{{ completedTasks }}/{{ totalTasks }}</div>
            <p class="text-sm text-gray-600">Topshiriqlar</p>
          </div>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-blue-600 h-2 rounded-full transition-all" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <div class="p-6 border rounded-lg shadow-md bg-white">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div class="text-2xl font-bold">{{ earnedPoints }}</div>
            <p class="text-sm text-gray-600">XP toplandi</p>
          </div>
        </div>
        <p class="text-xs text-gray-500">{{ totalPoints }} XP dan</p>
      </div>

      <div class="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div class="mb-2 font-semibold">Upgrade statusi</div>
        <div class="text-2xl font-bold mb-2">{{ Math.round(progress) }}%</div>
        <p class="text-sm text-blue-100">
          {{ completedTasks === totalTasks
            ? 'Tabriklaymiz! Upgrade tayyor'
            : `Yana ${totalTasks - completedTasks} ta topshiriq qoldi` }}
        </p>
      </div>
    </div>

    <!-- Requirement Banner -->
    <div class="p-6 rounded-lg shadow-md mb-6 md:mb-8 border-l-4 border-l-orange-600 bg-white">
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg md:text-xl mb-1 font-bold">Upgrade shartlari</h3>
          <p class="text-sm text-gray-600">
            <strong>Middle → Senior</strong> darajasiga o'tish uchun barcha topshiriqlarni yakunlash kerak.
            Har bir topshiriq ma'lum XP bilan baholanadi va 70% dan yuqori natija talab qilinadi.
          </p>
        </div>
      </div>
    </div>

    <!-- Tasks List -->
    <div>
      <h2 class="text-xl md:text-2xl mb-4 md:mb-6 font-bold">Bu oygi topshiriqlar</h2>
      <div class="grid gap-4">
        <div
            v-for="task in tasks"
            :key="task.id"
            :class="[
            'p-4 md:p-6 rounded-lg shadow-md transition-all border-l-4',
            task.completed
              ? 'bg-green-50 border-l-green-600'
              : 'hover:shadow-lg border-l-gray-300 bg-white'
          ]"
        >
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <!-- Status Icon -->
            <div
                :class="[
                'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                task.completed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
              ]"
            >
              <svg v-if="task.completed" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2" />
              </svg>
            </div>

            <!-- Task Info -->
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                <h3 :class="['font-bold', task.completed ? 'text-green-900' : '']">{{ task.title }}</h3>
                <span class="px-2 py-1 text-xs border rounded-md flex items-center gap-1">
                  <component :is="getTaskIcon(task.type)" class="w-4 h-4" />
                  {{ getTaskTypeLabel(task.type) }}
                </span>
                <span class="px-2 py-1 text-xs bg-blue-600 text-white rounded-md">{{ task.points }} XP</span>
                <span v-if="task.completed && task.score" class="px-2 py-1 text-xs bg-green-600 text-white rounded-md">
                  {{ task.score }}%
                </span>
              </div>
              <p class="text-sm text-gray-600 mb-3">{{ task.description }}</p>

              <button
                  v-if="!task.completed"
                  @click="handleStartTask(task)"
                  class="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                Boshlash
              </button>
              <div v-else class="flex items-center gap-2 text-sm text-green-700">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bajarildi - {{ task.score }}% ball</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reward Section -->
    <div
        v-if="completedTasks === totalTasks"
        class="p-6 md:p-8 rounded-lg shadow-md mt-6 md:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
    >
      <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <h2 class="text-2xl md:text-3xl mb-2 font-bold">Tabriklaymiz!</h2>
      <p class="text-blue-100 mb-6">
        Siz barcha topshiriqlarni muvaffaqiyatli bajardingiz va Senior darajasiga o'tishga tayyorsiz!
      </p>
      <button class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors">
        Upgrade olish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpgradePage',
  data() {
    return {
      tasks: [
        {
          id: 1,
          type: 'test',
          title: 'React Advanced Patterns Test',
          description: '20 ta savol - Higher-Order Components, Render Props, Compound Components',
          completed: true,
          points: 150,
          score: 85
        },
        {
          id: 2,
          type: 'code',
          title: 'Build a Real-time Chat Component',
          description: 'WebSocket yoki Socket.io dan foydalanib real-time chat yarating',
          completed: true,
          points: 200,
          score: 92
        },
        {
          id: 3,
          type: 'written',
          title: 'System Design: Social Media Feed',
          description: 'Instagram/Twitter kabi feed tizimining arxitekturasini tavsiflab bering',
          completed: false,
          points: 180
        },
        {
          id: 4,
          type: 'test',
          title: 'TypeScript Advanced Types',
          description: '15 ta savol - Generics, Conditional Types, Mapped Types',
          completed: false,
          points: 120
        },
        {
          id: 5,
          type: 'code',
          title: 'Optimize Performance',
          description: 'Berilgan React ilovani optimize qiling (memoization, lazy loading, code splitting)',
          completed: false,
          points: 180
        }
      ]
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(t => t.completed).length;
    },
    totalTasks() {
      return this.tasks.length;
    },
    earnedPoints() {
      return this.tasks
          .filter(t => t.completed)
          .reduce((sum, t) => sum + t.points, 0);
    },
    totalPoints() {
      return this.tasks.reduce((sum, t) => sum + t.points, 0);
    },
    progress() {
      return (this.completedTasks / this.totalTasks) * 100;
    }
  },
  methods: {
    getTaskIcon(type) {
      // Vue 3 da icon komponentlarni dynamic render qilish uchun
      // Real loyihada icon kutubxonasi (lucide-vue yoki boshqa) ishlatiladi
      return 'svg';
    },
    getTaskTypeLabel(type) {
      const labels = {
        test: 'Test',
        code: 'Code',
        written: 'Yozma'
      };
      return labels[type] || type;
    },
    handleStartTask(task) {
      console.log('Starting task:', task.title);
      // TODO: Navigate to task detail page
      // this.$router.push(`/tasks/${task.id}`);
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS dan foydalanilgan, shuning uchun qo'shimcha stil kerak emas */
/* Agar Tailwind ishlatilmasa, kerakli stillarni qo'shish mumkin */
</style>