<template>
  <div class="bg-gray-50 min-h-screen py-12 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- Skewed gradient background -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      
      <!-- Main content card -->
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="text-center mb-6">
            <h1 class="text-2xl font-bold text-gray-900">{{ $t('auth.login.title') }}</h1>
            <p class="text-gray-500 text-sm mt-1">{{ $t('auth.login.subtitle') }}</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Error message -->
            <div v-if="errorMessage" class="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
              {{ errorMessage }}
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="text-sm font-bold text-gray-600 block">{{ $t('auth.login.phone') }}</label>
              <div class="relative mt-2">
                <span class="absolute left-4 top-2 text-gray-500">+</span>
                <input 
                  type="text" 
                  id="phone" 
                  v-model="phone" 
                  required 
                  autofocus
                  @input="formatPhone"
                  class="w-full px-4 pl-8 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="998901234567"
                />
              </div>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="text-sm font-bold text-gray-600 block">{{ $t('auth.login.password') }}</label>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                required
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            <div class="flex items-center justify-between">
              <a href="#" class="text-sm text-blue-600 hover:text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div class="pt-2">
              <button 
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-200"
              >
                Login
              </button>
            </div>

            <div class="text-center text-sm text-gray-500 mt-4">
              Don't have an account? 
              <a href="/register" class="text-blue-600 hover:underline font-bold">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  onLogin: {
    type: Function,
    required: false
  }
});

// Emits
const emit = defineEmits(['login']);

// Reactive data
const phone = ref('');
const password = ref('');
const errorMessage = ref('');

// Methods
const formatPhone = (event) => {
  // Remove non-numeric characters and limit to 12 digits
  let value = event.target.value.replace(/[^0-9]/g, '').slice(0, 12);
  phone.value = value;
};

const handleSubmit = () => {
  errorMessage.value = '';
  
  // Test user credentials
  const TEST_USER = {
    phone: '998901234567',
    password: 'test123'
  };

  // Check if credentials match test user
  if (phone.value === TEST_USER.phone && password.value === TEST_USER.password) {
    // Set token in localStorage
    const testToken = 'test-token-' + Date.now();
    localStorage.setItem('token', testToken);
    
    console.log('✅ Test user logged in successfully!');
    console.log('Token:', testToken);
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
    return;
  }
  
  // If not test user, show error
  errorMessage.value = 'Telefon raqam yoki parol noto\'g\'ri. Test user: 998901234567 / test123';
  
  // Emit login event for other authentication methods
  emit('login', {
    phone: phone.value,
    password: password.value
  });

  // Call onLogin prop if provided
  if (props.onLogin) {
    props.onLogin();
  }

  console.log('Login submitted:', {
    phone: phone.value,
    password: '***'
  });
};
</script>

<style scoped>
/* No custom styles needed - using Tailwind CSS */
</style>