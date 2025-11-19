<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2">Zametkalar</h1>
      <p class="text-gray-600">O'rganish jarayonini qayd qiling va tahlil qiling</p>
    </div>

    <!-- Stats and Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      <div class="p-6 border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
        <div class="flex items-center gap-3 mb-2">
          <FileTextIcon class="w-8 h-8 text-blue-600" />
          <div>
            <div class="text-3xl">{{ totalNotes }}</div>
            <p class="text-sm text-gray-600">Jami zametkalar</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
        <div class="flex items-center gap-3 mb-2">
          <ClockIcon class="w-8 h-8 text-green-600" />
          <div>
            <div class="text-3xl">{{ totalTime }}h</div>
            <p class="text-sm text-gray-600">O'rganishga vaqt</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
        <div class="flex items-center gap-3 mb-2">
          <CheckCircleIcon class="w-8 h-8 text-purple-600" />
          <div>
            <div class="text-3xl">{{ totalProblems }}</div>
            <p class="text-sm text-gray-600">Yechilgan masalalar</p>
          </div>
        </div>
      </div>

      <div class="p-6 border-0 shadow-md bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
        <div class="flex items-center gap-3 mb-2">
          <BookOpenIcon class="w-8 h-8 text-orange-600" />
          <div>
            <div class="text-3xl">{{ totalNewConcepts }}</div>
            <p class="text-sm text-gray-600">Yangi konsepsiyalar</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="mb-6 md:mb-8">
      <div class="flex flex-col sm:flex-row gap-3">
        <button @click="isCreatingNew = true" class="flex-1 sm:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
          <PlusIcon class="w-5 h-5" />
          Yangi zametka yaratish
        </button>
        <button class="flex-1 sm:flex-none px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
          <MicIcon class="w-5 h-5" />
          Ovozli zametka
        </button>
      </div>
    </div>

    <!-- Learning Insights -->
    <div class="mb-8">
      <h2 class="text-2xl mb-4">Learning Insights</h2>
      <div class="grid md:grid-cols-4 gap-4">
        <div v-for="(insight, index) in learningInsights" :key="index" class="p-5 border-0 shadow-md hover:shadow-lg transition-shadow rounded-lg">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <component :is="insight.icon" class="w-6 h-6" :class="insight.iconColor" />
            </div>
          </div>
          <div class="text-sm text-gray-600 mb-1">{{ insight.title }}</div>
          <div class="text-2xl mb-1">{{ insight.value }}</div>
          <p class="text-xs text-gray-500">{{ insight.description }}</p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-4 gap-6 mb-8">
      <!-- Notes List -->
      <div class="lg:col-span-1">
        <div class="mb-4">
          <div class="relative">
            <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Qidirish..." class="w-full pl-10 pr-4 py-2 border rounded-lg" />
          </div>
        </div>

        <div class="space-y-2 max-h-[600px] overflow-y-auto">
          <button
              v-for="note in notes"
              :key="note.id"
              @click="handleNoteClick(note.id)"
              :class="[
              'w-full text-left p-4 rounded-xl border transition-all',
              selectedNote === note.id
                ? 'bg-blue-50 border-blue-300 shadow-md'
                : 'bg-white border-gray-200 hover:border-blue-200'
            ]"
          >
            <div class="mb-2">{{ note.title }}</div>
            <div class="flex items-center gap-3 text-xs text-gray-500 mb-2">
              <div class="flex items-center gap-1">
                <CalendarIcon class="w-3 h-3" />
                {{ note.date }}
              </div>
              <div class="flex items-center gap-1">
                <ClockIcon class="w-3 h-3" />
                {{ note.duration }}
              </div>
            </div>
            <div class="flex gap-2">
              <span class="text-xs px-2 py-1 bg-gray-200 rounded-md">
                {{ note.problemsSolved }} masala
              </span>
              <span class="text-xs px-2 py-1 bg-gray-200 rounded-md">
                {{ note.newConcepts }} yangi
              </span>
            </div>
          </button>
        </div>
      </div>

      <!-- Note Editor -->
      <div class="lg:col-span-2 space-y-6">
        <div class="p-6 border-0 shadow-md rounded-lg">
          <input
              v-model="title"
              placeholder="Sarlavha..."
              class="w-full text-2xl border-0 px-0 mb-4 focus:outline-none"
          />

          <!-- Meta Info -->
          <div class="flex gap-4 mb-4 pb-4 border-b">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <CalendarIcon class="w-4 h-4" />
              <span>2025-11-15</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <ClockIcon class="w-4 h-4" />
              <span>2 soat</span>
            </div>
            <span class="text-xs px-2 py-1 bg-gray-200 rounded-md">React</span>
            <span class="text-xs px-2 py-1 bg-gray-200 rounded-md">Hooks</span>
          </div>

          <textarea
              v-model="content"
              placeholder="Zametka yozing..."
              class="w-full min-h-[300px] border-0 px-0 resize-none focus:outline-none"
          ></textarea>

          <!-- Problem Tracking -->
          <div class="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t">
            <div>
              <label class="text-sm text-gray-600 mb-2 block">Yechilgan masalalar soni</label>
              <input type="number" v-model.number="problemsSolved" min="0" class="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label class="text-sm text-gray-600 mb-2 block">Yangi tushunchalar soni</label>
              <input type="number" v-model.number="newConcepts" min="0" class="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>

          <div class="flex items-center gap-3 mt-4 pt-4 border-t">
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <HashIcon class="w-4 h-4" />
              Tag qo'shish
            </button>
            <div class="flex-1"></div>
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">Bekor qilish</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Saqlash</button>
          </div>
        </div>

        <!-- Voice Notes -->
        <div class="p-6 border-0 shadow-md rounded-lg">
          <h3 class="mb-4">Ovozli zametkalar</h3>
          <div class="space-y-3">
            <div v-for="voice in voiceNotes" :key="voice.id" class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MicIcon class="w-5 h-5 text-blue-600" />
              </div>
              <div class="flex-1">
                <div class="text-sm">{{ voice.title }}</div>
                <div class="text-xs text-gray-500">{{ voice.date }}</div>
              </div>
              <div class="text-sm text-gray-600">{{ voice.duration }}</div>
              <button class="px-3 py-1 border rounded-lg hover:bg-gray-50">Tinglash</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Analytics Sidebar -->
      <div class="lg:col-span-1 space-y-6">
        <!-- Activity Heatmap -->
        <div class="p-6 border-0 shadow-md rounded-lg">
          <h3 class="mb-4">Faollik</h3>
          <div class="space-y-4">
            <div>
              <div class="flex items-center justify-between mb-2 text-sm">
                <span>Bu hafta</span>
                <span class="text-blue-600">{{ thisWeekNotes }} ta</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" :style="{ width: (thisWeekNotes / 10) * 100 + '%' }"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2 text-sm">
                <span>Bu oy</span>
                <span class="text-green-600">{{ thisMonthNotes }} ta</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" :style="{ width: (thisMonthNotes / 30) * 100 + '%' }"></div>
              </div>
            </div>
            <div class="pt-3 border-t">
              <div class="flex items-center gap-2 text-sm text-green-600">
                <TrendingUpIcon class="w-4 h-4" />
                <span>+28% o'tgan oyga nisbatan</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Topics -->
        <div class="p-6 border-0 shadow-md rounded-lg">
          <h3 class="mb-4">Top mavzular</h3>
          <div class="space-y-2">
            <div v-for="(item, index) in topTopics" :key="index" class="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span :class="['text-xs px-2 py-1 rounded-md', item.color]">{{ item.tag }}</span>
              <span class="text-sm text-gray-600">{{ item.count }} ta</span>
            </div>
          </div>
        </div>

        <!-- Skill Growth -->
        <div class="p-6 border-0 shadow-md rounded-lg">
          <h3 class="mb-4">Qobiliyatlar o'sishi</h3>
          <div class="space-y-3">
            <div v-for="(item, index) in skillGrowth" :key="index">
              <div class="flex items-center justify-between mb-1 text-sm">
                <span>{{ item.skill }}</span>
                <span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-md">+{{ item.growth }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" :style="{ width: item.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Problem Solving Stats -->
        <div class="p-6 border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
          <h3 class="mb-4">Masala Yechish</h3>
          <div class="text-center">
            <div class="text-5xl mb-2">{{ totalProblems }}</div>
            <p class="text-sm text-gray-600 mb-4">Jami yechilgan masalalar</p>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="bg-white rounded-lg p-3">
                <div class="text-2xl mb-1">18</div>
                <div class="text-xs text-gray-600">Bu hafta</div>
              </div>
              <div class="bg-white rounded-lg p-3">
                <div class="text-2xl mb-1">72</div>
                <div class="text-xs text-gray-600">Bu oy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New Note Dialog -->
    <div v-if="isCreatingNew" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="isCreatingNew = false">
      <div class="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl mb-6">Yangi zametka yaratish</h2>

        <div class="space-y-6">
          <!-- Title Input -->
          <div>
            <label class="text-sm mb-2 block">Sarlavha</label>
            <input
                v-model="newNoteTitle"
                placeholder="Zametka sarlavhasi..."
                class="w-full px-4 py-2 border rounded-lg text-lg"
            />
          </div>

          <!-- Content Textarea -->
          <div>
            <label class="text-sm mb-2 block">Mazmuni</label>
            <textarea
                v-model="newNoteContent"
                @input="handleContentChange"
                placeholder="Masalan: 'Bugun 5 ta binary search masalasini yechdim LeetCode da...' yoki 'React useState hookini o'rgandim...'"
                class="w-full min-h-[200px] px-4 py-2 border rounded-lg"
            ></textarea>
            <p class="text-xs text-gray-500 mt-2">
              AI mazmun asosida avtomatik kategoriya va teglar aniqlaydi
            </p>
          </div>

          <!-- AI Detected Category -->
          <div v-if="aiDetectedCategory" class="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
            <div class="flex items-center gap-3 mb-3">
              <SparklesIcon class="w-6 h-6 text-purple-600" />
              <div>
                <div class="text-sm text-gray-600">AI aniqlagan kategoriya:</div>
                <div class="text-lg">{{ aiDetectedCategory }}</div>
              </div>
            </div>
            <div class="flex gap-2 flex-wrap">
              <span v-for="(tag, index) in aiDetectedTags" :key="index" class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-md">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm text-gray-600 mb-2 block">Yechilgan masalalar</label>
              <input type="number" placeholder="0" min="0" class="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label class="text-sm text-gray-600 mb-2 block">Yangi tushunchalar</label>
              <input type="number" placeholder="0" min="0" class="w-full px-4 py-2 border rounded-lg" />
            </div>
          </div>

          <!-- Time Spent -->
          <div>
            <label class="text-sm text-gray-600 mb-2 block">O'rganishga sarflangan vaqt</label>
            <div class="flex gap-3 flex-wrap">
              <button v-for="time in ['30 min', '1 soat', '2 soat', '3 soat', '4+ soat']" :key="time" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
                {{ time }}
              </button>
            </div>
          </div>

          <!-- Suggested Categories -->
          <div v-if="!aiDetectedCategory">
            <label class="text-sm text-gray-600 mb-2 block">Yoki kategoriyani tanlang</label>
            <div class="grid grid-cols-2 gap-3">
              <button
                  v-for="cat in categories"
                  :key="cat.name"
                  @click="aiDetectedCategory = cat.name"
                  :class="['flex items-center gap-3 p-4 rounded-xl border transition-all', cat.color]"
              >
                <component :is="cat.icon" class="w-5 h-5" />
                <span class="text-sm">{{ cat.name }}</span>
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3 pt-4 border-t">
            <button @click="isCreatingNew = false" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Bekor qilish
            </button>
            <div class="flex-1"></div>
            <button
                @click="handleSaveNewNote"
                :disabled="!newNoteTitle || !newNoteContent"
                class="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ZapIcon class="w-4 h-4" />
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Plus as PlusIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  Hash as HashIcon,
  Calendar as CalendarIcon,
  TrendingUp as TrendingUpIcon,
  Clock as ClockIcon,
  FileText as FileTextIcon,
  CheckCircle as CheckCircleIcon,
  Lightbulb as LightbulbIcon,
  Target as TargetIcon,
  BookOpen as BookOpenIcon,
  Zap as ZapIcon,
  Sparkles as SparklesIcon
} from 'lucide-vue-next';

const selectedNote = ref(0);
const title = ref('React Hooks Deep Dive');
const content = ref('useState, useEffect, useContext haqida o\'rganilgan asosiy konsepsiyalar...');
const isCreatingNew = ref(false);
const problemsSolved = ref(3);
const newConcepts = ref(5);
const newNoteTitle = ref('');
const newNoteContent = ref('');
const aiDetectedCategory = ref(null);
const aiDetectedTags = ref([]);

const notes = ref([
  {
    id: 0,
    title: 'React Hooks Deep Dive',
    content: 'useState, useEffect, useContext haqida o\'rganilgan asosiy konsepsiyalar...',
    tags: ['react', 'hooks', 'frontend'],
    date: '2025-11-15',
    duration: '2 soat',
    problemsSolved: 3,
    newConcepts: 5
  },
  {
    id: 1,
    title: 'System Design Basics',
    content: 'Load balancing, caching, database sharding asoslari...',
    tags: ['system-design', 'architecture'],
    date: '2025-11-14',
    duration: '3 soat',
    problemsSolved: 2,
    newConcepts: 8
  },
  {
    id: 2,
    title: 'TypeScript Advanced Types',
    content: 'Generics, Conditional types, Mapped types...',
    tags: ['typescript', 'types'],
    date: '2025-11-13',
    duration: '1.5 soat',
    problemsSolved: 4,
    newConcepts: 6
  },
  {
    id: 3,
    title: 'Algorithm Practice - Binary Search',
    content: 'Binary search va variations. LeetCode 10 ta masala yechildi.',
    tags: ['algorithms', 'leetcode'],
    date: '2025-11-12',
    duration: '2.5 soat',
    problemsSolved: 10,
    newConcepts: 3
  },
  {
    id: 4,
    title: 'Next.js App Router',
    content: 'Server components, client components, routing...',
    tags: ['nextjs', 'react', 'ssr'],
    date: '2025-11-11',
    duration: '3 soat',
    problemsSolved: 5,
    newConcepts: 12
  }
]);

const voiceNotes = ref([
  { id: 1, title: 'React Performance Optimization', duration: '2:34', date: '2025-11-15' },
  { id: 2, title: 'Database Indexing Notes', duration: '1:45', date: '2025-11-14' },
  { id: 3, title: 'API Design Patterns', duration: '3:12', date: '2025-11-13' }
]);

const totalNotes = ref(128);
const totalTime = ref(156);
const thisMonthNotes = ref(24);
const thisWeekNotes = ref(6);

const totalProblems = computed(() =>
    notes.value.reduce((sum, note) => sum + note.problemsSolved, 0)
);

const totalNewConcepts = computed(() =>
    notes.value.reduce((sum, note) => sum + note.newConcepts, 0)
);

const learningInsights = computed(() => [
  {
    icon: TargetIcon,
    iconColor: 'text-blue-600',
    title: 'Top yunalish',
    value: 'React & Frontend',
    description: '40% barcha zametkalar'
  },
  {
    icon: ZapIcon,
    iconColor: 'text-yellow-600',
    title: 'Eng produktiv kun',
    value: 'Juma',
    description: 'Ortacha 3 soat/kun'
  },
  {
    icon: TrendingUpIcon,
    iconColor: 'text-green-600',
    title: "O'sish sur'ati",
    value: '+28%',
    description: "O'tgan oyga nisbatan"
  },
  {
    icon: LightbulbIcon,
    iconColor: 'text-purple-600',
    title: 'Yangi tushunchalar',
    value: totalNewConcepts.value.toString(),
    description: 'So\'nggi 30 kunda'
  }
]);

const topTopics = ref([
  { tag: 'react', count: 32, color: 'bg-blue-100 text-blue-700' },
  { tag: 'typescript', count: 24, color: 'bg-purple-100 text-purple-700' },
  { tag: 'algorithms', count: 18, color: 'bg-green-100 text-green-700' },
  { tag: 'system-design', count: 15, color: 'bg-orange-100 text-orange-700' },
  { tag: 'nextjs', count: 12, color: 'bg-pink-100 text-pink-700' }
]);

const skillGrowth = ref([
  { skill: 'React', growth: 15, level: 85 },
  { skill: 'TypeScript', growth: 12, level: 75 },
  { skill: 'Algorithms', growth: 18, level: 60 }
]);

const categories = ref([
  { name: 'Yechilgan masalalar', icon: CheckCircleIcon, color: 'bg-green-50 hover:bg-green-100 border-green-200' },
  { name: 'Yangi bilim', icon: LightbulbIcon, color: 'bg-blue-50 hover:bg-blue-100 border-blue-200' },
  { name: 'Loyiha ishlanmasi', icon: TargetIcon, color: 'bg-purple-50 hover:bg-purple-100 border-purple-200' },
  { name: 'Suhbat tayyorgarlik', icon: FileTextIcon, color: 'bg-orange-50 hover:bg-orange-100 border-orange-200' },
]);

const detectCategory = (content) => {
  const lowerContent = content.toLowerCase();

  if (lowerContent.includes('masala') || lowerContent.includes('leetcode') || lowerContent.includes('algorithm')) {
    aiDetectedCategory.value = 'Yechilgan masalalar';
    aiDetectedTags.value = ['algorithms', 'problem-solving', 'practice'];
  } else if (lowerContent.includes('yangi') || lowerContent.includes('o\'rgandim') || lowerContent.includes('tushuncha')) {
    aiDetectedCategory.value = 'Yangi bilim';
    aiDetectedTags.value = ['learning', 'concepts', 'education'];
  } else if (lowerContent.includes('loyiha') || lowerContent.includes('project') || lowerContent.includes('build')) {
    aiDetectedCategory.value = 'Loyiha ishlanmasi';
    aiDetectedTags.value = ['project', 'development', 'hands-on'];
  } else if (lowerContent.includes('intervyu') || lowerContent.includes('interview') || lowerContent.includes('suhbat')) {
    aiDetectedCategory.value = 'Suhbat tayyorgarlik';
    aiDetectedTags.value = ['interview', 'preparation', 'career'];
  } else if (lowerContent.includes('xato') || lowerContent.includes('error') || lowerContent.includes('debug')) {
    aiDetectedCategory.value = 'Xatolar va yechimlar';
    aiDetectedTags.value = ['debugging', 'problem-solving', 'errors'];
  } else {
    aiDetectedCategory.value = 'Umumiy qayd';
    aiDetectedTags.value = ['notes', 'general'];
  }
};

const handleContentChange = () => {
  if (newNoteContent.value.length > 20) {
    detectCategory(newNoteContent.value);
  } else {
    aiDetectedCategory.value = null;
    aiDetectedTags.value = [];
  }
};

const handleSaveNewNote = () => {
  // Save logic here
  isCreatingNew.value = false;
  newNoteTitle.value = '';
  newNoteContent.value = '';
  aiDetectedCategory.value = null;
  aiDetectedTags.value = [];
};

const handleNoteClick = (id) => {
  selectedNote.value = id;
  const note = notes.value.find(n => n.id === id);
  if (note) {
    title.value = note.title;
    content.value = note.content;
    problemsSolved.value = note.problemsSolved;
    newConcepts.value = note.newConcepts;
  }
};
</script>

<style scoped>

</style>