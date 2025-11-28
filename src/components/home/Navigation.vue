<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <a href="/" class="flex items-center gap-2">
          <div
              class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-hotel w-6 h-6 text-white">
              <path d="M10 22v-6.57"></path>
              <path d="M12 11h.01"></path>
              <path d="M12 7h.01"></path>
              <path d="M14 15.43V22"></path>
              <path d="M15 16a5 5 0 0 0-6 0"></path>
              <path d="M16 11h.01"></path>
              <path d="M16 7h.01"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 7h.01"></path>
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
            </svg>
          </div>
          <span class="text-xl tracking-tight">AviaBooking</span>
        </a>
        <div class="hidden md:flex items-center gap-6">
          <a href="/hotel"
              class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-hotel w-4 h-4">
              <path d="M10 22v-6.57"></path>
              <path d="M12 11h.01"></path>
              <path d="M12 7h.01"></path>
              <path d="M14 15.43V22"></path>
              <path d="M15 16a5 5 0 0 0-6 0"></path>
              <path d="M16 11h.01"></path>
              <path d="M16 7h.01"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 7h.01"></path>
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
            </svg>
            <span class="text-sm">Mehmonxonalar</span>
          </a>
          <a href="/rent"
              class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-car w-4 h-4">
              <path
                  d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <path d="M9 17h6"></path>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
            <span class="text-sm">Ijara</span>
          </a>
          <a href="/ticket-planner"
              class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-calculator w-4 h-4">
              <rect width="16" height="20" x="4" y="2" rx="2"></rect>
              <line x1="8" x2="16" y1="6" y2="6"></line>
              <line x1="16" x2="16" y1="14" y2="18"></line>
              <path d="M16 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M8 18h.01"></path>
            </svg>
            <span class="text-sm">Trip Planner</span>
          </a>
          <a href="/tickets"
              class="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-ticket w-4 h-4">
              <path
                  d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M13 5v2"></path>
              <path d="M13 17v2"></path>
              <path d="M13 11v2"></path>
            </svg>
            <span class="text-sm">Biletlar</span>
          </a>
        </div>
        <div class="hidden md:flex items-center gap-3"><select
            class="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
          <option value="guest">Mehmon</option>
          <option value="user">Foydalanuvchi</option>
          <option value="business">Biznes</option>
        </select></div>
        <button class="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-menu w-6 h-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Hotel, Car, Calculator, Ticket, User, Building2, Menu, X } from 'lucide-vue-next'

defineProps({
  currentPage: String,
  userRole: String
})

defineEmits({
  'update:currentPage': null,
  'update:userRole': null
})

const mobileMenuOpen = ref(false)

const handleMobileNavClick = (page) => {
  const emit = defineEmits()
  emit('update:currentPage', page)
  mobileMenuOpen.value = false
}
</script>
