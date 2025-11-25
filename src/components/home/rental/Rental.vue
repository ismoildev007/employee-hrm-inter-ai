<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Type Selector -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 class="text-2xl mb-6 text-gray-900">Ijara turi</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <TypeButton
              icon="Car"
              label="Avtomobil"
              :active="activeType === 'car'"
              @click="activeType = 'car'"
          />
          <TypeButton
              icon="Bike"
              label="Skuter"
              :active="activeType === 'scooter'"
              @click="activeType = 'scooter'"
          />
          <TypeButton
              icon="Bike"
              label="Velosiped"
              :active="activeType === 'bike'"
              @click="activeType = 'bike'"
          />
          <TypeButton
              icon="Home"
              label="Uy-joy"
              :active="activeType === 'apartment'"
              @click="activeType = 'apartment'"
          />
        </div>

        <!-- Search Form -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm text-gray-700 mb-2">Joylashuv</label>
            <div class="relative">
              <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Shahar yoki hudud"
                  v-model="searchParams.location"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Boshlanish</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="date"
                  v-model="searchParams.startDate"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Tugash</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="date"
                  v-model="searchParams.endDate"
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
        <!-- Rental List -->
        <div class="lg:col-span-2 space-y-6">
          <h3 class="text-xl text-gray-900">{{ filteredRentals.length }} ta variant topildi</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
                v-for="item in filteredRentals"
                :key="item.id"
                class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                @click="selectedItem = item"
            >
              <div class="h-48">
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-lg text-gray-900">{{ item.name }}</h4>
                  <div class="flex items-center gap-1 text-yellow-500">
                    <Star class="w-4 h-4 fill-current" />
                    <span class="text-sm text-gray-900">{{ item.rating }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin class="w-4 h-4" />
                  <span class="text-sm">{{ item.location }}</span>
                </div>

                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                      v-for="(value, index) in Object.values(item.specs).slice(0, 2)"
                      :key="index"
                      class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {{ value }}
                  </span>
                </div>

                <div class="flex justify-between items-center pt-3 border-t border-gray-200">
                  <div class="text-sm text-gray-600">{{ item.reviews }} sharh</div>
                  <div class="text-right">
                    <div class="text-sm text-gray-600">Kuniga</div>
                    <div class="text-xl text-blue-600">{{ formatPrice(item.pricePerDay) }} so'm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div v-if="selectedItem" class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h4 class="text-xl mb-4 text-gray-900">Ijara ma'lumotlari</h4>

            <div class="mb-4">
              <img
                  :src="selectedItem.image"
                  :alt="selectedItem.name"
                  class="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h5 class="text-lg mb-2 text-gray-900">{{ selectedItem.name }}</h5>
            <div class="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin class="w-4 h-4" />
              <span class="text-sm">{{ selectedItem.location }}</span>
            </div>

            <div class="space-y-2 mb-4 pb-4 border-b border-gray-200">
              <div v-for="(value, key) in selectedItem.specs" :key="key" class="flex justify-between text-sm">
                <span class="text-gray-600 capitalize">{{ key }}</span>
                <span class="text-gray-900">{{ value }}</span>
              </div>
            </div>

            <div class="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div class="flex justify-between">
                <span class="text-gray-600">1 kun</span>
                <span class="text-gray-900">{{ formatPrice(selectedItem.pricePerDay) }} so'm</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sug'urta</span>
                <span class="text-gray-900">15,000 so'm</span>
              </div>
            </div>

            <div class="flex justify-between mb-6">
              <span class="text-gray-900">Jami</span>
              <span class="text-2xl text-blue-600">{{ formatPrice(selectedItem.pricePerDay + 15000) }} so'm</span>
            </div>

            <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-3">
              Ijaraga olish
            </button>
            <button
                @click="selectedItem = null"
                class="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Bekor qilish
            </button>
          </div>

          <div v-else class="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p class="text-blue-800 text-center">
              Transport yoki uy-joyni tanlang va ma'lumotlarni ko'ring
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Car, Bike, Home, MapPin, Calendar, Star } from 'lucide-vue-next'
import TypeButton from '@/components/home/rental/TypeButton.vue'

const mockRentals = [
  {
    id: 1,
    name: "Chevrolet Spark",
    type: 'car',
    location: "Toshkent, Yunusobod",
    pricePerDay: 150000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW50YWwlMjBjYXJ8ZW58MXx8fHwxNzYzNDg1OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: { passengers: "4 kishi", transmission: "Avtomat", fuel: "Benzin" },
    available: true
  },
  {
    id: 2,
    name: "Toyota Camry 2022",
    type: 'car',
    location: "Toshkent, Mirzo Ulug'bek",
    pricePerDay: 350000,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
    specs: { passengers: "5 kishi", transmission: "Avtomat", fuel: "Benzin" },
    available: true
  },
  {
    id: 3,
    name: "Electric Scooter Pro",
    type: 'scooter',
    location: "Toshkent, Chilonzor",
    pricePerDay: 30000,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    specs: { speed: "25 km/soat", range: "30 km", charge: "4 soat" },
    available: true
  },
  {
    id: 4,
    name: "Mountain Bike X500",
    type: 'bike',
    location: "Toshkent, Yakkasaroy",
    pricePerDay: 20000,
    rating: 4.3,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
    specs: { gears: "21 tezlik", size: "27.5\"", type: "Tog' velosipedi" },
    available: true
  },
  {
    id: 5,
    name: "Zamonaviy 2-xonali kvartira",
    type: 'apartment',
    location: "Toshkent, Sergeli",
    pricePerDay: 200000,
    rating: 4.8,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYzNDg2MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: { rooms: "2 xona", guests: "4 kishi", area: "65 m²" },
    available: true
  },
  {
    id: 6,
    name: "3-xonali kvartira - uzoq muddat",
    type: 'apartment',
    location: "Toshkent, Mirobod",
    pricePerDay: 180000,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    specs: { rooms: "3 xona", guests: "6 kishi", area: "85 m²" },
    available: true
  }
]

const activeType = ref('car')
const searchParams = ref({
  location: '',
  startDate: '',
  endDate: ''
})
const selectedItem = ref(null)

const filteredRentals = computed(() =>
    mockRentals.filter(item => item.type === activeType.value)
)

const formatPrice = (price) => {
  return price.toLocaleString()
}
</script>