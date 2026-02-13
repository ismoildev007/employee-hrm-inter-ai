<template>
  <div class="bg-gray-50 min-h-screen py-12 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
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
              <div class="relative mt-2 flex">
                <span
                  class="flex items-center px-4 py-2 bg-gray-200 border border-r-0 rounded-l-lg text-gray-700 font-medium">+998</span>
                <input type="text" id="phone" v-model="phoneNumber" required autofocus @input="formatPhone"
                  class="flex-1 px-4 py-2 border rounded-r-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="901234567" maxlength="9" />
              </div>
              <p v-if="phoneError" class="text-sm text-red-500 mt-1">{{ $t(`auth.validation.${phoneError}`) }}</p>
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="text-sm font-bold text-gray-600 block">{{ $t('auth.login.password')
              }}</label>
              <input type="password" id="password" v-model="password" required @input="validatePassword"
                class="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :class="{ 'border-red-500': passwordError }" placeholder="********" />
              <p v-if="passwordError" class="text-sm text-red-500 mt-1">{{ $t(`auth.validation.${passwordError}`) }}</p>
            </div>

            <div class="pt-2">
              <button type="submit" :disabled="loading"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="loading">{{ $t('common.loading') }}</span>
                <span v-else>{{ $t('auth.login.loginButton') }}</span>
              </button>
            </div>

            <div class="text-center text-sm text-gray-500 mt-4">
              {{ $t('auth.login.noAccount') }}
              <a href="/register" class="text-blue-600 hover:underline font-bold">{{ $t('auth.login.register') }}</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { login } from '../../services/authService';

const { t } = useI18n();

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
const phoneNumber = ref(''); // Only the 9 digits after 998
const password = ref('');
const errorMessage = ref('');
const loading = ref(false);
const phoneError = ref('');
const passwordError = ref('');

// Computed full phone with 998 prefix
const phone = computed(() => '998' + phoneNumber.value);

// Methods
const formatPhone = (event) => {
  // Remove non-numeric characters and limit to 9 digits
  let value = event.target.value.replace(/[^0-9]/g, '').slice(0, 9);
  phoneNumber.value = value;

  // Validate phone length
  if (value.length > 0 && value.length < 9) {
    phoneError.value = 'phoneLength';
  } else {
    phoneError.value = '';
  }
};

const validatePassword = () => {
  if (password.value.length === 0) {
    passwordError.value = '';
    return;
  }

  if (password.value.length < 8) {
    passwordError.value = 'passwordMinLength';
  } else if (!/[a-zA-Z]/.test(password.value)) {
    passwordError.value = 'passwordRequireLetter';
  } else {
    passwordError.value = '';
  }
};

const handleSubmit = async () => {
  errorMessage.value = '';
  phoneError.value = '';
  passwordError.value = '';

  // Validate phone
  if (phoneNumber.value.length !== 9) {
    phoneError.value = 'phoneLength';
    return;
  }

  // Validate password
  if (password.value.length < 8) {
    passwordError.value = 'passwordMinLength';
    return;
  }

  if (!/[a-zA-Z]/.test(password.value)) {
    passwordError.value = 'passwordRequireLetter';
    return;
  }

  loading.value = true;

  try {
    // Call login API with full phone (998 + 9 digits)
    const response = await login(phone.value, password.value);

    if (response.success) {
      console.log('✅ Login successful!');
      console.log('User:', response.data.user);
      console.log('Token:', response.data.token);

      // Emit login event
      emit('login', response.data);

      // Call onLogin prop if provided
      if (props.onLogin) {
        props.onLogin(response.data);
      }

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      errorMessage.value = response.message || t('auth.validation.invalidCredentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = error.message || t('auth.validation.invalidCredentials');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* No custom styles needed - using Tailwind CSS */
</style>