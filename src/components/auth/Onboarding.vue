<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-12">
      <div class="flex items-center gap-2 mb-8">
        <TrendingUp class="w-8 h-8 text-blue-600" />
        <span class="text-xl">CareerTrack</span>
      </div>

      <!-- Progress Indicator -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-600">Qadam 1/3</span>
          <span class="text-sm text-gray-600">33%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-blue-600 rounded-full" style="width: 33%"></div>
        </div>
      </div>

      <h1 class="text-3xl mb-2">Profil ma'lumotlari</h1>
      <p class="text-gray-600 mb-8">
        Bu ma'lumotlar asosida darajangizni aniqlaymiz va shaxsiy roadmap yaratamiz
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Resume Upload -->
        <div>
          <label class="block text-sm font-medium mb-2">Resume (CV)</label>
          <div class="mt-2">
            <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 cursor-pointer bg-gray-50 hover:bg-blue-50 transition-colors">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <FileText v-if="fileName" class="w-10 h-10 text-blue-600 mb-2" />
                <Upload v-else class="w-10 h-10 text-gray-400 mb-2" />

                <p v-if="fileName" class="text-sm text-gray-700">{{ fileName }}</p>
                <p v-else class="text-sm text-gray-500">
                  <span class="text-blue-600">Bosing</span> yoki faylni torting
                </p>

                <p v-if="fileName" class="text-xs text-gray-500 mt-1">Faylni o'zgartirish uchun bosing</p>
                <p v-else class="text-xs text-gray-400 mt-1">PDF yoki DOC (max 5MB)</p>
              </div>
              <input
                  type="file"
                  class="hidden"
                  accept=".pdf,.doc,.docx"
                  @change="handleFileChange"
                  required
              />
            </label>
          </div>
        </div>

        <!-- Field Selection -->
        <div>
          <label for="field" class="block text-sm font-medium mb-2">Soha</label>
          <select
              id="field"
              v-model="field"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          >
            <option value="">Sohangizni tanlang</option>
            <option value="it">IT / Software Development</option>
            <option value="design">Design / UX/UI</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance / Banking</option>
            <option value="sales">Sales</option>
            <option value="hr">HR / Recruitment</option>
            <option value="product">Product Management</option>
            <option value="other">Boshqa</option>
          </select>
        </div>

        <!-- Experience -->
        <div>
          <label for="experience" class="block text-sm font-medium mb-2">Tajriba</label>
          <select
              id="experience"
              v-model="experience"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          >
            <option value="">Tajriba yillarini tanlang</option>
            <option value="0-1">0-1 yil</option>
            <option value="1-3">1-3 yil</option>
            <option value="3-5">3-5 yil</option>
            <option value="5-7">5-7 yil</option>
            <option value="7+">7+ yil</option>
          </select>
        </div>

        <div class="flex gap-3 pt-4">
          <button
              type="button"
              @click="goBack"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Orqaga
          </button>
          <button
              type="submit"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Davom etish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TrendingUp, Upload, FileText } from 'lucide-vue-next'

const router = useRouter()
const field = ref('')
const experience = ref('')
const fileName = ref('')

const handleFileChange = (e) => {
  const file = e.target.files?.[0]
  if (file) {
    fileName.value = file.name
  }
}

const handleSubmit = () => {
  router.push('/resume-audit')
}

const goBack = () => {
  router.back()
}
</script>