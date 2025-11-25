<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl mb-4 text-gray-900">AI Sayohat Kalkulyatori</h1>
        <p class="text-lg text-gray-600">
          Sayohatingizni rejalashtiring va budjetni avtomatik hisoblab oling
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Trip Planning Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Basic Info -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl mb-6 text-gray-900">Asosiy ma'lumotlar</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm text-gray-700 mb-2">Boshlanish sanasi</label>
                <div class="relative">
                  <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                      type="date"
                      v-model="tripData.startDate"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-2">Tugash sanasi</label>
                <div class="relative">
                  <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                      type="date"
                      v-model="tripData.endDate"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-gray-700 mb-2">Sayohatchilar soni</label>
                <div class="relative">
                  <Users class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                      type="number"
                      min="1"
                      v-model.number="tripData.travelers"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-2">Transport turi</label>
                <select
                    v-model="tripData.transportType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="car">Avtomobil</option>
                  <option value="plane">Samolyot</option>
                  <option value="bus">Avtobus</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Locations -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl mb-6 text-gray-900">Boradigan joylar</h3>

            <div class="flex gap-3 mb-4">
              <div class="relative flex-1">
                <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Shahar yoki joy nomini kiriting"
                    v-model="newLocation"
                    @keypress.enter="addLocation"
                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                  @click="addLocation"
                  class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Plus class="w-5 h-5" />
                <span>Qo'shish</span>
              </button>
            </div>

            <div v-if="locations.length > 0" class="space-y-2">
              <div
                  v-for="(location, idx) in locations"
                  :key="location.id"
                  class="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                    {{ idx + 1 }}
                  </div>
                  <span class="text-gray-900">{{ location.name }}</span>
                </div>
                <button
                    @click="removeLocation(location.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 class="w-5 h-5" />
                </button>
              </div>
            </div>
            <div v-else class="text-center py-8 text-gray-500">
              Hali hech qanday joy qo'shilmagan
            </div>
          </div>

          <!-- Calculate Button -->
          <button
              @click="calculateTrip"
              :disabled="locations.length === 0 || !tripData.startDate || !tripData.endDate"
              class="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Sparkles class="w-5 h-5" />
            <span>Budjetni hisoblash va AI tavsiyalar olish</span>
          </button>
        </div>

        <!-- Budget & Suggestions -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Budget Breakdown -->
          <div v-if="budget" class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl mb-6 text-gray-900">Budjet taqsimoti</h3>

            <div class="space-y-4">
              <BudgetItem
                  :icon="Car"
                  label="Transport"
                  :amount="budget.transport"
              />
              <BudgetItem
                  :icon="Hotel"
                  label="Turar joy"
                  :amount="budget.accommodation"
              />
              <BudgetItem
                  :icon="Coffee"
                  label="Ovqat"
                  :amount="budget.food"
              />
              <BudgetItem
                  :icon="Plane"
                  label="Sayohat va faoliyat"
                  :amount="budget.activities"
              />
            </div>

            <div class="mt-6 pt-6 border-t-2 border-gray-200">
              <div class="flex justify-between items-center">
                <span class="text-lg text-gray-900">Jami budjet</span>
                <span class="text-3xl text-purple-600">
                  {{ budget.total.toLocaleString() }} so'm
                </span>
              </div>
            </div>
          </div>
          <div v-else class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200">
            <div class="text-center">
              <Sparkles class="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p class="text-purple-800">
                Joylarni qo'shing va budjetni hisoblang
              </p>
            </div>
          </div>

          <!-- AI Suggestions -->
          <div v-if="aiSuggestions.length > 0" class="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-2 mb-4">
              <Sparkles class="w-6 h-6" />
              <h3 class="text-xl">AI Tavsiyalar</h3>
            </div>

            <div class="space-y-3">
              <div
                  v-for="(suggestion, idx) in aiSuggestions"
                  :key="idx"
                  class="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <p class="text-sm">{{ suggestion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  MapPin, Calendar, Users, Car, Hotel, Coffee, Plane, Plus, Trash2, Sparkles
} from 'lucide-vue-next'

import BudgetItem from "@/components/home/planner/BugdetItem.vue"

//  TypeScript types removed - using plain JavaScript with comments for clarity
const locations = ref([])
const newLocation = ref('')
const tripData = reactive({
  startDate: '',
  endDate: '',
  travelers: 2,
  transportType: 'car'
})
const budget = ref(null)
const aiSuggestions = ref([])

const addLocation = () => {
  if (newLocation.value.trim()) {
    locations.value.push({
      id: Date.now().toString(),
      name: newLocation.value
    })
    newLocation.value = ''
  }
}

const removeLocation = (id) => {
  locations.value = locations.value.filter(loc => loc.id !== id)
}

const calculateTrip = () => {
  const days = tripData.startDate && tripData.endDate
      ? Math.ceil(
          (new Date(tripData.endDate).getTime() - new Date(tripData.startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      )
      : 1

  const transportCost = tripData.transportType === 'car'
      ? 150000 * days
      : tripData.transportType === 'plane'
          ? 800000
          : 50000 * days
  const accommodationCost = 300000 * days
  const foodCost = 100000 * days * tripData.travelers
  const activitiesCost = 150000 * days

  budget.value = {
    transport: transportCost,
    accommodation: accommodationCost,
    food: foodCost,
    activities: activitiesCost,
    total: transportCost + accommodationCost + foodCost + activitiesCost
  }

  aiSuggestions.value = [
    "Samarqand Registon maydonini ertalab soat 9:00 da tashrif buyurish yaxshiroq - kamroq odamlar bo'ladi",
    "Toshkent Chorsu bozorida milliy taomlarni tatib ko'ring - narxlar qulay",
    "Buxoroda Ark qal'asi yaqinidagi mehmonxonalar qulayroq joylashgan",
    "Transport uchun taksi o'rniga Yandex Go ishlatish 30% arzonroq",
    "Kechki ovqatni mahalliy oshxonalarda yeyish restoranlardan 2-3 marta arzonroq"
  ]
}
</script>