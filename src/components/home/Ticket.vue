<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search Form -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 class="text-2xl mb-6 text-gray-900">Bilet qidirish</h2>

        <!-- Type Selector -->
        <div class="flex gap-4 mb-6">
          <button
              v-for="type in ticketTypes"
              :key="type.value"
              @click="activeType = type.value"
              :class="[
              'flex items-center gap-2 px-6 py-3 rounded-lg transition-all',
              activeType === type.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <component :is="type.icon" class="w-5 h-5" />
            <span>{{ type.label }}</span>
          </button>
        </div>

        <!-- Search Inputs -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label class="block text-sm text-gray-700 mb-2">
              {{ activeType === 'event' ? 'Joy' : 'Qayerdan' }}
            </label>
            <div class="relative">
              <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.from"
                  type="text"
                  :placeholder="activeType === 'event' ? 'Joy nomi' : 'Shahar'"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">
              {{ activeType === 'event' ? 'Tadbir nomi' : 'Qayerga' }}
            </label>
            <div class="relative">
              <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.to"
                  type="text"
                  :placeholder="activeType === 'event' ? 'Tadbir' : 'Shahar'"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Sana</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.date"
                  type="date"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">
              {{ activeType === 'event' ? 'Biletlar soni' : 'Yo\'lovchilar' }}
            </label>
            <div class="relative">
              <Users class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model.number="searchParams.passengers"
                  type="number"
                  min="1"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div class="flex items-end">
            <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Qidirish
            </button>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Ticket List -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-xl text-gray-900">{{ filteredTickets.length }} ta variant</h3>
            <select class="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Tavsiya etilgan</option>
              <option>Eng arzon</option>
              <option>Eng tez</option>
              <option>Eng qimmat</option>
            </select>
          </div>

          <div
              v-for="ticket in filteredTickets"
              :key="ticket.id"
              @click="selectedTicket = ticket"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <component :is="getIconForType(ticket.type)" :class="getIconColorClass(ticket.type)" />
                  <span class="text-sm text-gray-600">{{ ticket.company }}</span>
                </div>

                <div class="flex items-center gap-4 mb-3">
                  <div class="text-center">
                    <div class="text-2xl text-gray-900">{{ ticket.time }}</div>
                    <div class="text-sm text-gray-600">{{ ticket.from }}</div>
                  </div>

                  <div class="flex-1 flex flex-col items-center">
                    <div class="text-sm text-gray-600 mb-1">{{ ticket.duration }}</div>
                    <div class="w-full h-px bg-gray-300 relative">
                      <ArrowRight class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 bg-white" />
                    </div>
                  </div>

                  <div class="text-center">
                    <div class="text-2xl text-gray-900">
                      {{ getArrivalTime(ticket.time) }}
                    </div>
                    <div class="text-sm text-gray-600">{{ ticket.to }}</div>
                  </div>
                </div>

                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Clock class="w-4 h-4" />
                  <span>{{ formatDate(ticket.date) }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ ticket.seatsAvailable }} ta joy bor</span>
                </div>
              </div>

              <div class="text-right">
                <div class="text-3xl text-blue-600 mb-1">
                  {{ formatPrice(ticket.price) }} so'm
                </div>
                <button
                    @click.stop="selectedTicket = ticket"
                    class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Tanlash
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div v-if="selectedTicket" class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h4 class="text-xl mb-6 text-gray-900">Bilet ma'lumotlari</h4>

            <div class="space-y-4 mb-6">
              <div>
                <div class="text-sm text-gray-600 mb-1">Kompaniya</div>
                <div class="text-gray-900">{{ selectedTicket.company }}</div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-600 mb-1">
                    {{ selectedTicket.type === 'event' ? 'Joy' : 'Qayerdan' }}
                  </div>
                  <div class="text-gray-900">{{ selectedTicket.from }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">
                    {{ selectedTicket.type === 'event' ? 'Tadbir' : 'Qayerga' }}
                  </div>
                  <div class="text-gray-900">{{ selectedTicket.to }}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-600 mb-1">Sana</div>
                  <div class="text-gray-900">
                    {{ formatDate(selectedTicket.date) }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-600 mb-1">Vaqt</div>
                  <div class="text-gray-900">{{ selectedTicket.time }}</div>
                </div>
              </div>

              <div v-if="selectedTicket.duration">
                <div class="text-sm text-gray-600 mb-1">Davomiyligi</div>
                <div class="text-gray-900">{{ selectedTicket.duration }}</div>
              </div>

              <div>
                <div class="text-sm text-gray-600 mb-1">Bo'sh joylar</div>
                <div class="text-gray-900">{{ selectedTicket.seatsAvailable }} ta</div>
              </div>
            </div>

            <div class="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div class="flex justify-between">
                <span class="text-gray-600">Bilet narxi × {{ searchParams.passengers }}</span>
                <span class="text-gray-900">
                  {{ formatPrice(selectedTicket.price * searchParams.passengers) }} so'm
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Xizmat to'lovi</span>
                <span class="text-gray-900">10,000 so'm</span>
              </div>
            </div>

            <div class="flex justify-between mb-6">
              <span class="text-gray-900">Jami</span>
              <span class="text-2xl text-blue-600">
                {{ formatPrice((selectedTicket.price * searchParams.passengers) + 10000) }} so'm
              </span>
            </div>

            <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-3">
              Sotib olish
            </button>
            <button
                @click="selectedTicket = null"
                class="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Bekor qilish
            </button>

            <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-sm text-green-800">
                ✓ Elektron bilet email orqali yuboriladi
              </p>
            </div>
          </div>
          <div v-else class="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p class="text-blue-800 text-center">
              Biletni tanlang va ma'lumotlarni ko'ring
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Plane, Bus, Ticket, Calendar, MapPin, Clock, ArrowRight, Users } from 'lucide-vue-next'

const activeType = ref('flight')
const selectedTicket = ref(null)
const searchParams = ref({
  from: '',
  to: '',
  date: '',
  passengers: 1
})

const ticketTypes = [
  { value: 'flight', label: 'Aviabilet', icon: Plane },
  { value: 'bus', label: 'Avtobus', icon: Bus },
]

const mockTickets = [
  {
    id: 1,
    type: 'flight',
    from: 'Toshkent',
    to: 'Samarqand',
    date: '2025-12-01',
    time: '08:30',
    duration: '1s 15min',
    price: 450000,
    company: 'Uzbekistan Airways',
    seatsAvailable: 23
  },
  {
    id: 2,
    type: 'flight',
    from: 'Toshkent',
    to: 'Samarqand',
    date: '2025-12-01',
    time: '14:00',
    duration: '1s 15min',
    price: 380000,
    company: 'Uzbekistan Airways',
    seatsAvailable: 15
  },
  {
    id: 3,
    type: 'flight',
    from: 'Toshkent',
    to: 'Istanbul',
    date: '2025-12-05',
    time: '22:30',
    duration: '5s 30min',
    price: 2500000,
    company: 'Turkish Airlines',
    seatsAvailable: 8
  },
  {
    id: 4,
    type: 'bus',
    from: 'Toshkent',
    to: 'Samarqand',
    date: '2025-12-01',
    time: '07:00',
    duration: '4s 30min',
    price: 80000,
    company: 'Express Bus',
    seatsAvailable: 12
  },
  {
    id: 5,
    type: 'bus',
    from: 'Toshkent',
    to: 'Buxoro',
    date: '2025-12-02',
    time: '09:00',
    duration: '7s 00min',
    price: 120000,
    company: 'Comfort Travel',
    seatsAvailable: 8
  }
]

const filteredTickets = computed(() =>
    mockTickets.filter(ticket => ticket.type === activeType.value)
)

const getIconForType = (type) => {
  const icons = { flight: Plane, bus: Bus, event: Ticket }
  return icons[type] || Plane
}

const getIconColorClass = (type) => {
  const colors = {
    flight: 'w-5 h-5 text-blue-600',
    bus: 'w-5 h-5 text-green-600',
  }
  return colors[type] || 'w-5 h-5 text-blue-600'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('uz-UZ')
}

const formatPrice = (price) => {
  return price.toLocaleString()
}

const getArrivalTime = (departTime) => {
  const [hours, minutes] = departTime.split(':')
  const newMinutes = (parseInt(minutes) + 30) % 60
  return `${hours}:${newMinutes.toString().padStart(2, '0')}`
}
</script>