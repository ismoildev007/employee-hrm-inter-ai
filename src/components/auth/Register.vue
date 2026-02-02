<template>
  <div class="bg-gray-50 min-h-screen py-12 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- Skewed gradient background -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      
      <!-- Main content card -->
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="text-center mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Register</h1>
            <p class="text-gray-500 text-sm mt-1">Inter-AI HeadHunter</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Error message -->
            <div v-if="errorMessage" class="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
              {{ errorMessage }}
            </div>

            <!-- Full Name -->
            <div>
              <label for="name" class="text-sm font-bold text-gray-600 block">Full Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="name" 
                required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="text-sm font-bold text-gray-600 block">Phone</label>
              <div class="relative mt-2">
                <span class="absolute left-4 top-2 text-gray-500">+</span>
                <input 
                  type="text" 
                  id="phone" 
                  v-model="phone" 
                  required
                  @input="formatPhone"
                  class="w-full px-4 pl-8 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="998901234567"
                />
              </div>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="text-sm font-bold text-gray-600 block">Password</label>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :class="{ 'border-red-500': password && password.length < 8 }"
                placeholder="********"
              />
              <p v-if="password && password.length < 8" class="text-sm text-red-500 mt-1">
                Password must be at least 8 characters
              </p>
            </div>

            <!-- Confirm Password -->
            <div>
              <label for="confirmPassword" class="text-sm font-bold text-gray-600 block">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="confirmPassword" 
                required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :class="{ 'border-red-500': confirmPassword && password !== confirmPassword }"
                placeholder="********"
              />
              <p v-if="confirmPassword && password !== confirmPassword" class="text-sm text-red-500 mt-1">
                Passwords do not match
              </p>
            </div>

            <div class="pt-2">
              <button 
                type="submit"
                :disabled="!isFormValid"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Register
              </button>
            </div>

            <div class="text-center text-sm text-gray-500 mt-4">
              Already have an account? 
              <a href="/login" class="text-blue-600 hover:underline font-bold">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Emits
const emit = defineEmits(['register']);

// Reactive data
const name = ref('');
const phone = ref('998');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

// Methods
const formatPhone = (event) => {
  // Remove non-numeric characters
  let value = event.target.value.replace(/[^0-9]/g, '').slice(0, 12);
  
  // Ensure it starts with 998
  if (!value.startsWith('998')) {
    value = '998' + value.replace(/^99/, '');
  }
  
  phone.value = value;
};

// Computed
const isFormValid = computed(() => {
  return (
      name.value &&
      phone.value &&
      password.value &&
      password.value.length >= 8 &&
      confirmPassword.value &&
      password.value === confirmPassword.value
  );
});

const handleSubmit = () => {
  if (!isFormValid.value) {
    return;
  }

  errorMessage.value = '';

  // Emit register event
  emit('register', {
    name: name.value,
    phone: phone.value,
    password: password.value
  });

  console.log('Registration submitted:', {
    name: name.value,
    phone: phone.value,
    password: '***'
  });

  window.location.href = '/onboarding';
};
</script>

<style scoped>
/* No custom styles needed - using Tailwind CSS */
</style>