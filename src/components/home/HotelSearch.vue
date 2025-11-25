<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Search Form -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 class="text-2xl mb-6 text-gray-900">Mehmonxona qidirish</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label class="block text-sm text-gray-700 mb-2">Joylashuv</label>
            <div class="relative">
              <MapPin class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.location"
                  type="text"
                  placeholder="Shahar yoki hudud"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Kirish sanasi</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.checkIn"
                  type="date"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Chiqish sanasi</label>
            <div class="relative">
              <Calendar class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model="searchParams.checkOut"
                  type="date"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-2">Mehmonlar</label>
            <div class="relative">
              <Users class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  v-model.number="searchParams.guests"
                  type="number"
                  min="1"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div class="flex items-end">
            <button
                @click="handleSearch"
                class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search class="w-5 h-5" />
              <span>Qidirish</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Hotel List -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex justify-between items-center">
            <h3 class="text-xl text-gray-900">{{ mockHotels.length }} ta mehmonxona topildi</h3>
            <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg">
              <option value="recommended">Tavsiya etilgan</option>
              <option value="price-asc">Narx: Pastdan yuqoriga</option>
              <option value="price-desc">Narx: Yuqoridan pastga</option>
              <option value="rating">Reyting bo'yicha</option>
            </select>
          </div>

          <div
              v-for="hotel in mockHotels"
              :key="hotel.id"
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              @click="selectedHotel = hotel"
          >
            <div class="flex flex-col sm:flex-row">
              <div class="sm:w-64 h-48 sm:h-auto">
                <img
                    :src="hotel.image"
                    :alt="hotel.name"
                    class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 p-6">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h4 class="text-xl text-gray-900 mb-1">{{ hotel.name }}</h4>
                    <div class="flex items-center gap-2 text-gray-600">
                      <MapPin class="w-4 h-4" />
                      <span class="text-sm">{{ hotel.location }}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-lg">
                    <Star class="w-4 h-4 fill-current" />
                    <span>{{ hotel.rating }}</span>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                      v-for="(amenity, idx) in hotel.amenities"
                      :key="idx"
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1"
                  >
                    <Wifi v-if="amenity === 'Wi-Fi'" class="w-3 h-3" />
                    <Coffee v-else-if="amenity === 'Breakfast'" class="w-3 h-3" />
                    <Car v-else-if="amenity === 'Parking'" class="w-3 h-3" />
                    <Dumbbell v-else-if="amenity === 'Gym'" class="w-3 h-3" />
                    {{ amenity }}
                  </span>
                </div>

                <div class="flex justify-between items-end">
                  <div class="text-sm text-gray-600">
                    {{ hotel.reviews }} ta sharh
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-600">Kecha uchun</div>
                    <div class="text-2xl text-blue-600">{{ formatPrice(hotel.price) }} so'm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div v-if="selectedHotel" class="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h4 class="text-xl mb-4 text-gray-900">Bron qilish</h4>

            <div class="mb-4">
              <img
                  :src="selectedHotel.image"
                  :alt="selectedHotel.name"
                  class="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h5 class="text-lg mb-2 text-gray-900">{{ selectedHotel.name }}</h5>
            <div class="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin class="w-4 h-4" />
              <span class="text-sm">{{ selectedHotel.location }}</span>
            </div>

            <div class="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div class="flex justify-between">
                <span class="text-gray-600">1 kecha</span>
                <span class="text-gray-900">{{ formatPrice(selectedHotel.price) }} so'm</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Xizmat to'lovi</span>
                <span class="text-gray-900">25,000 so'm</span>
              </div>
            </div>

            <div class="flex justify-between mb-6">
              <span class="text-gray-900">Jami</span>
              <span class="text-2xl text-blue-600">{{ formatPrice(selectedHotel.price + 25000) }} so'm</span>
            </div>

            <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-3">
              Bron qilish
            </button>
            <button
                @click="selectedHotel = null"
                class="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Bekor qilish
            </button>
          </div>
          <div v-else class="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p class="text-blue-800 text-center">
              Mehmonxonani tanlang va bron qilish ma'lumotlarini ko'ring
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, MapPin, Calendar, Users, Star, Wifi, Coffee, Car, Dumbbell } from 'lucide-vue-next'

const mockHotels = [
  {
    id: 1,
    name: 'Grand Palace Hotel',
    location: "Toshkent, Amir Temur ko'chasi",
    price: 450000,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NjM1MjM3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['Wi-Fi', 'Breakfast', 'Parking', 'Gym'],
    available: true
  },
  {
    id: 2,
    name: 'City View Hotel',
    location: 'Toshkent, Yunusobod tumani',
    price: 320000,
    rating: 4.5,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    amenities: ['Wi-Fi', 'Breakfast', 'Parking'],
    available: true
  },
  {
    id: 3,
    name: 'Silk Road Boutique',
    location: "Samarqand, Registon ko'chasi",
    price: 280000,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    amenities: ['Wi-Fi', 'Breakfast'],
    available: true
  },
  {
    id: 4,
    name: 'Business Hotel Tashkent',
    location: 'Toshkent, Chilonzor tumani',
    price: 250000,
    rating: 4.3,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    amenities: ['Wi-Fi', 'Parking', 'Gym'],
    available: true
  },
]

const searchParams = ref({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 2
})

const selectedHotel = ref(null)
const sortBy = ref('recommended')

const handleSearch = () => {
  console.log('Searching with params:', searchParams.value)
}

const formatPrice = (price) => {
  return price.toLocaleString('uz-UZ')
}
</script>