<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <!-- Logo -->
        <button
            @click="emit('navigate', 'home')"
            class="flex items-center gap-2"
        >
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Hotel class="w-6 h-6 text-white" />
          </div>
          <span class="text-xl tracking-tight">SuperTrip</span>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NavButton
              :icon="Hotel"
              label="Mehmonxonalar"
              :active="currentPage === 'hotels'"
              @click="emit('navigate', 'hotels')"
          />
          <NavButton
              :icon="Car"
              label="Ijara"
              :active="currentPage === 'rentals'"
              @click="emit('navigate', 'rentals')"
          />
          <NavButton
              :icon="Calculator"
              label="Trip Planner"
              :active="currentPage === 'trip-planner'"
              @click="emit('navigate', 'trip-planner')"
          />
          <NavButton
              :icon="Ticket"
              label="Biletlar"
              :active="currentPage === 'tickets'"
              @click="emit('navigate', 'tickets')"
          />
        </div>

        <!-- User Menu -->
        <div class="hidden md:flex items-center gap-3">
          <select
              :value="userRole"
              @change="(e) => emit('update-role', e.target.value)"
              class="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
          >
            <option value="guest">Mehmon</option>
            <option value="user">Foydalanuvchi</option>
            <option value="business">Biznes</option>
          </select>

          <button
              v-if="userRole === 'business'"
              @click="emit('navigate', 'business')"
              class="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Building2 class="w-4 h-4" />
            <span>CRM Panel</span>
          </button>

          <button
              v-if="userRole === 'user'"
              @click="emit('navigate', 'dashboard')"
              class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <User class="w-4 h-4" />
            <span>Dashboard</span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col gap-2">

          <MobileNavButton
              :icon="Hotel"
              label="Mehmonxonalar"
              :active="currentPage === 'hotels'"
              @click="handleMobileNav('hotels')"
          />
          <MobileNavButton
              :icon="Car"
              label="Ijara"
              :active="currentPage === 'rentals'"
              @click="handleMobileNav('rentals')"
          />
          <MobileNavButton
              :icon="Calculator"
              label="Trip Planner"
              :active="currentPage === 'trip-planner'"
              @click="handleMobileNav('trip-planner')"
          />
          <MobileNavButton
              :icon="Ticket"
              label="Biletlar"
              :active="currentPage === 'tickets'"
              @click="handleMobileNav('tickets')"
          />

          <div class="mt-4 pt-4 border-t border-gray-200">
            <select
                :value="userRole"
                @change="(e) => emit('update-role', e.target.value)"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="guest">Mehmon</option>
              <option value="user">Foydalanuvchi</option>
              <option value="business">Biznes</option>
            </select>
          </div>

        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Hotel, Car, Calculator, Ticket, User, Building2, Menu, X } from 'lucide-vue-next';
import NavButton from "@/components/home/NavButton.vue";
import MobileNavButton from "@/components/home/MobileNavButton.vue";

const props = defineProps({
  currentPage: {
    type: String,
    default: ''
  },
  userRole: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['navigate', 'update-role']);

const mobileMenuOpen = ref(false);

const handleMobileNav = (page) => {
  emit('navigate', page);
  mobileMenuOpen.value = false;
};
</script>
