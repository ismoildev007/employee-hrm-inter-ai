<template>
  <div class="bg-gray-50 min-h-screen py-12 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- Skewed gradient background -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>

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

            <!-- First Name -->
            <div>
              <label for="firstName" class="text-sm font-bold text-gray-600 block">First Name</label>
              <input type="text" id="firstName" v-model="firstName" required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="John" />
            </div>

            <!-- Last Name -->
            <div>
              <label for="lastName" class="text-sm font-bold text-gray-600 block">Last Name</label>
              <input type="text" id="lastName" v-model="lastName" required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Doe" />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="text-sm font-bold text-gray-600 block">Phone</label>
              <div class="relative mt-2">
                <span class="absolute left-4 top-2 text-gray-500">+</span>
                <input type="text" id="phone" v-model="phone" required @input="formatPhone"
                  class="w-full px-4 pl-8 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="998901234567" />
              </div>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="text-sm font-bold text-gray-600 block">Password</label>
              <input type="password" id="password" v-model="password" required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :class="{ 'border-red-500': password && password.length < 6 }" placeholder="********" />
              <p v-if="password && password.length < 6" class="text-sm text-red-500 mt-1">
                Password must be at least 6 characters
              </p>
            </div>

            <!-- Confirm Password -->
            <div>
              <label for="confirmPassword" class="text-sm font-bold text-gray-600 block">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :class="{ 'border-red-500': confirmPassword && password !== confirmPassword }" placeholder="********" />
              <p v-if="confirmPassword && password !== confirmPassword" class="text-sm text-red-500 mt-1">
                Passwords do not match
              </p>
            </div>

            <div class="pt-2">
              <button type="submit" :disabled="loading"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="loading">Loading...</span>
                <span v-else>Register</span>
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
import { ref } from 'vue';
import { register } from '../../services/authService';

// Reactive data
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const loading = ref(false);

// Methods
const formatPhone = (event) => {
  // Remove non-numeric characters and limit to 12 digits
  let value = event.target.value.replace(/[^0-9]/g, '').slice(0, 12);
  phone.value = value;
};

const handleSubmit = async () => {
  errorMessage.value = '';

  // Validation
  if (!firstName.value || !lastName.value || !phone.value || !password.value) {
    errorMessage.value = 'Barcha maydonlarni to\'ldiring';
    return;
  }

  if (phone.value.length !== 12) {
    errorMessage.value = 'Telefon raqam 12 ta raqamdan iborat bo\'lishi kerak';
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Parollar mos emas';
    return;
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak';
    return;
  }

  loading.value = true;

  try {
    // Call register API
    const response = await register({
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phone.value,
      password: password.value,
      raw_data: null
    });

    if (response.success) {
      console.log('✅ Registration successful!');
      console.log('User:', response.data.user);
      console.log('Token:', response.data.token);

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      errorMessage.value = response.message || 'Ro\'yxatdan o\'tishda xatolik';
    }
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = error.message || 'Ro\'yxatdan o\'tishda xatolik yuz berdi';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* No custom styles needed - using Tailwind CSS */
</style>