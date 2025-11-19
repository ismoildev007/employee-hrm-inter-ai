<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2">Vakansiyalar</h1>
      <p class="text-gray-600">Sizning joylashuvingiz va ko'nikmalaringizga mos ishlar</p>
    </div>

    <!-- Filters -->
    <div class="p-4 md:p-6 border-0 shadow-md mb-6 md:mb-8 rounded-lg border bg-white">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <div class="flex items-center gap-2">
          <Filter class="w-5 h-5 text-gray-600" />
          <h2 class="text-lg md:text-xl">Filtrlar</h2>
        </div>
        <button
            @click="showFilters = !showFilters"
            class="md:hidden px-3 py-2 border rounded text-sm hover:bg-gray-50"
        >
          {{ showFilters ? 'Yashirish' : "Ko'rsatish" }}
        </button>
      </div>

      <div v-if="showFilters || windowWidth >= 768" class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="text-sm text-gray-600 mb-2 block">Qidirish</label>
          <div class="relative">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
                type="text"
                placeholder="Lavozim yoki kompaniya"
                class="pl-10 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-600 mb-2 block">Joylashuv</label>
          <select v-model="location" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="tashkent">Tashkent</option>
            <option value="remote">Remote</option>
            <option value="samarkand">Samarkand</option>
            <option value="bukhara">Bukhara</option>
          </select>
        </div>
        <div>
          <label class="text-sm text-gray-600 mb-2 block">Daraja</label>
          <select v-model="seniority" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="junior">Junior</option>
            <option value="middle">Middle</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div class="flex items-end">
          <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
            <Search class="w-4 h-4" />
            Qidirish
          </button>
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="flex items-center justify-between mb-6">
      <p class="text-gray-600">{{ jobs.length }} ta vakansiya topildi</p>
      <select class="w-48 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="recent">Eng yangilari</option>
        <option value="salary-high">Maosh (yuqoridan pastga)</option>
        <option value="salary-low">Maosh (pastdan yuqoriga)</option>
        <option value="relevant">Eng mos</option>
      </select>
    </div>

    <!-- Job Cards -->
    <div class="space-y-4">
      <div
          v-for="job in jobs"
          :key="job.id"
          class="p-6 border-0 shadow-md rounded-lg border bg-white hover:shadow-lg transition-shadow"
      >
        <div class="flex gap-6">
          <!-- Company Logo -->
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-2xl">
            {{ job.company[0] }}
          </div>

          <!-- Job Info -->
          <div class="flex-1">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-xl mb-1">{{ job.title }}</h3>
                <p class="text-gray-600">{{ job.company }}</p>
              </div>
              <button class="p-2 hover:bg-gray-100 rounded" :class="{ 'text-red-500': job.saved }">
                <Heart :class="['w-5 h-5', job.saved ? 'fill-current' : '']" />
              </button>
            </div>

            <div class="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
              <div class="flex items-center gap-1">
                <MapPin class="w-4 h-4" />
                {{ job.location }}
              </div>
              <div class="flex items-center gap-1">
                <DollarSign class="w-4 h-4" />
                {{ job.salary }}
              </div>
              <div class="flex items-center gap-1">
                <Briefcase class="w-4 h-4" />
                {{ job.type }}
              </div>
              <span class="px-2 py-1 border border-gray-300 rounded text-xs">{{ job.seniority }}</span>
              <span class="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">{{ job.source }}</span>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                  v-for="(skill, index) in job.skills"
                  :key="index"
                  class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs hover:bg-blue-100"
              >
                {{ skill }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ job.posted }}</span>
              <div class="flex gap-2">
                <button
                    @click="selectedJobId = job.id"
                    class="px-4 py-2 border rounded text-sm hover:bg-gray-50"
                >
                  Batafsil
                </button>
                <button class="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center gap-2">
                  Apply
                  <ExternalLink class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Integration Info -->
    <div class="p-6 border-0 shadow-md rounded-lg border bg-gradient-to-r from-blue-50 to-purple-50 mt-8">
      <div class="text-center">
        <h3 class="text-xl mb-2">Vakansiyalar qanday yig'iladi?</h3>
        <p class="text-gray-600">
          Biz sizning joylashuvingiz, ko'nikmalaringiz va darajangizga mos vakansiyalarni<br/>
          LinkedIn, hh.uz va hh.ru kabi platformalardan avtomatik ravishda yig'amiz va<br/>
          har kuni yangilaymiz.
        </p>
      </div>
    </div>

    <!-- Job Detail Modal -->
    <div
        v-if="selectedJobId !== null"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click="selectedJobId = null"
    >
      <div
          class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
      >
        <div v-if="selectedJob" class="p-6">
          <!-- Close Button -->
          <button
              @click="selectedJobId = null"
              class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X class="w-6 h-6" />
          </button>

          <!-- Job Header -->
          <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-2xl">
              {{ selectedJob.company[0] }}
            </div>
            <div class="flex-1">
              <h2 class="text-2xl mb-1">{{ selectedJob.title }}</h2>
              <p class="text-lg text-gray-600">{{ selectedJob.company }}</p>
              <div class="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                  <MapPin class="w-4 h-4" />
                  {{ selectedJob.location }}
                </div>
                <div class="flex items-center gap-1">
                  <DollarSign class="w-4 h-4" />
                  {{ selectedJob.salary }}
                </div>
                <div class="flex items-center gap-1">
                  <Briefcase class="w-4 h-4" />
                  {{ selectedJob.type }}
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <!-- Skills -->
            <div>
              <h3 class="mb-3 font-semibold">Talab qilinadigan texnologiyalar</h3>
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="(skill, index) in selectedJob.skills"
                    :key="index"
                    class="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <div>
              <h3 class="mb-3 font-semibold">Tavsif</h3>
              <p class="text-gray-700">{{ selectedJob.description }}</p>
            </div>

            <!-- Requirements -->
            <div>
              <h3 class="mb-3 font-semibold">Talablar</h3>
              <ul class="space-y-2">
                <li v-for="(req, index) in selectedJob.requirements" :key="index" class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Responsibilities -->
            <div>
              <h3 class="mb-3 font-semibold">Mas'uliyatlar</h3>
              <ul class="space-y-2">
                <li v-for="(resp, index) in selectedJob.responsibilities" :key="index" class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{{ resp }}</span>
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div>
              <h3 class="mb-3 font-semibold">Imtiyozlar</h3>
              <ul class="space-y-2">
                <li v-for="(benefit, index) in selectedJob.benefits" :key="index" class="flex items-start gap-2">
                  <CheckCircle class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 pt-4 border-t">
              <button class="flex-1 px-4 py-2 border rounded hover:bg-gray-50 flex items-center justify-center gap-2">
                <Heart class="w-4 h-4" />
                Saqlash
              </button>
              <button class="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                Apply
                <ExternalLink class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Search,
  MapPin,
  DollarSign,
  Briefcase,
  Heart,
  ExternalLink,
  Filter,
  CheckCircle,
  X
} from 'lucide-vue-next'

const location = ref('tashkent')
const seniority = ref('middle')
const showFilters = ref(true)
const selectedJobId = ref(null)
const windowWidth = ref(0)

const jobs = ref([
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Tashkent (Remote)',
    salary: '$3,000 - $4,500',
    type: 'Full-time',
    seniority: 'Senior',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    source: 'LinkedIn',
    posted: '2 kun oldin',
    saved: false,
    description: 'We are looking for an experienced Senior Frontend Developer to join our team. You will be responsible for building modern web applications using React and TypeScript.',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript knowledge',
      'Experience with Next.js and SSR',
      'GraphQL experience',
      'Team leadership skills'
    ],
    responsibilities: [
      'Develop and maintain frontend applications',
      'Collaborate with backend team',
      'Code review and mentoring',
      'Optimize application performance'
    ],
    benefits: [
      'Competitive salary',
      'Remote work',
      'Health insurance',
      'Professional development budget',
      'Flexible working hours'
    ]
  },
  {
    id: 2,
    title: 'Middle Full Stack Developer',
    company: 'StartupHub',
    location: 'Tashkent',
    salary: '$2,500 - $3,500',
    type: 'Full-time',
    seniority: 'Middle',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    source: 'hh.uz',
    posted: '1 hafta oldin',
    saved: true,
    description: 'Join our growing startup as a Full Stack Developer. Work on exciting projects and grow with the company.',
    requirements: [
      '3+ years full stack experience',
      'React and Node.js proficiency',
      'MongoDB database knowledge',
      'AWS cloud experience',
      'Good communication skills'
    ],
    responsibilities: [
      'Build full stack features',
      'Design and implement APIs',
      'Database schema design',
      'Deploy and maintain applications'
    ],
    benefits: [
      'Startup equity',
      'Modern office in Tashkent',
      'Learning budget',
      'Team events'
    ]
  },
  {
    id: 3,
    title: 'React Developer',
    company: 'Digital Agency',
    location: 'Remote',
    salary: '$2,000 - $3,000',
    type: 'Full-time',
    seniority: 'Middle',
    skills: ['React', 'Redux', 'TypeScript', 'REST API'],
    source: 'LinkedIn',
    posted: '3 kun oldin',
    saved: false,
    description: 'Digital agency looking for React developer to work on client projects.',
    requirements: [
      '2+ years React experience',
      'Redux state management',
      'TypeScript',
      'REST API integration'
    ],
    responsibilities: [
      'Develop client websites',
      'Implement designs',
      'Work with designers'
    ],
    benefits: [
      'Remote work',
      'Flexible hours',
      'Training opportunities'
    ]
  },
  {
    id: 4,
    title: 'Frontend Team Lead',
    company: 'FinTech Solutions',
    location: 'Tashkent (Hybrid)',
    salary: '$4,000 - $5,500',
    type: 'Full-time',
    seniority: 'Senior',
    skills: ['React', 'TypeScript', 'Leadership', 'Mentoring'],
    source: 'hh.ru',
    posted: '5 kun oldin',
    saved: false,
    description: 'Lead our frontend team and drive technical excellence in our fintech products.',
    requirements: [
      '6+ years frontend experience',
      '2+ years team lead experience',
      'Strong React and TypeScript',
      'Mentoring experience'
    ],
    responsibilities: [
      'Lead frontend team',
      'Technical decision making',
      'Code reviews',
      'Hiring and mentoring'
    ],
    benefits: [
      'High salary',
      'Hybrid work',
      'Bonuses',
      'Career growth'
    ]
  },
  {
    id: 5,
    title: 'Middle Backend Developer',
    company: 'CloudServ',
    location: 'Remote',
    salary: '$2,800 - $3,800',
    type: 'Full-time',
    seniority: 'Middle',
    skills: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    source: 'LinkedIn',
    posted: '1 kun oldin',
    saved: false,
    description: 'Backend developer for cloud infrastructure company.',
    requirements: [
      '3+ years Node.js',
      'PostgreSQL',
      'Docker and Kubernetes',
      'Microservices architecture'
    ],
    responsibilities: [
      'Develop backend services',
      'Deploy with Docker/K8s',
      'Database optimization'
    ],
    benefits: [
      'Remote work',
      'Good salary',
      'Modern tech stack'
    ]
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'E-Commerce Giant',
    location: 'Tashkent',
    salary: '$3,200 - $4,200',
    type: 'Full-time',
    seniority: 'Middle',
    skills: ['React', 'Node.js', 'MySQL', 'Redis'],
    source: 'hh.uz',
    posted: '4 kun oldin',
    saved: true,
    description: 'Work on large scale e-commerce platform serving millions of users.',
    requirements: [
      '4+ years experience',
      'React and Node.js',
      'MySQL and Redis',
      'High load systems'
    ],
    responsibilities: [
      'Full stack development',
      'Performance optimization',
      'Feature development'
    ],
    benefits: [
      'Competitive salary',
      'Office in Tashkent',
      'Health insurance',
      'Career growth'
    ]
  }
])

const selectedJob = computed(() => {
  return jobs.value.find(j => j.id === selectedJobId.value) || null
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Smooth transitions */
button {
  transition: all 0.2s ease;
}

select, input {
  transition: all 0.2s ease;
}
</style>