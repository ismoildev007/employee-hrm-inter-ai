<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div class="grid md:grid-cols-2">
        <!-- Left Side - Illustration -->
        <div class="bg-gradient-to-br from-purple-600 to-blue-600 p-12 text-white flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-6">Platformaga qo'shiling</h2>
          <ul class="space-y-4">
            <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
              <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <div class="mb-1 font-medium">{{ feature.title }}</div>
                <div class="text-sm text-purple-100">{{ feature.description }}</div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right Side - Form -->
        <div class="p-12">
          <a href="/" class="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="text-xl font-semibold">CareerTrack</span>
          </a>

          <h1 class="text-3xl font-bold mb-2">Akkaunt yaratish</h1>
          <p class="text-gray-600 mb-8">Bepul boshlang va karyerangizni rivojlantiring</p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  v-model="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium mb-2">Parol</label>
              <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  v-model="password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
              />
              <p v-if="password && password.length < 8" class="text-sm text-red-500 mt-1">
                Parol kamida 8 ta belgidan iborat bo'lishi kerak
              </p>
            </div>

            <div>
              <label for="confirmPassword" class="block text-sm font-medium mb-2">Parolni tasdiqlang</label>
              <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  v-model="confirmPassword"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  :class="{ 'border-red-500': confirmPassword && password !== confirmPassword }"
                  required
              />
              <p v-if="confirmPassword && password !== confirmPassword" class="text-sm text-red-500 mt-1">
                Parollar mos kelmayapti
              </p>
            </div>

            <button
                type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="!isFormValid"
            >
              Ro'yxatdan o'tish
            </button>

            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500">yoki</span>
              </div>
            </div>

            <div class="space-y-3">
              <button
                  type="button"
                  @click="handleGoogleSignup"
                  class="w-full border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              <button
                  type="button"
                  @click="handleGithubSignup"
                  class="w-full border-2 border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>
          </form>

          <p class="text-center mt-8 text-sm text-gray-600">
            Akkauntingiz bormi?
            <a href="/login" class="text-blue-600 hover:underline ml-1">
              Kirish
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResumeAuditPage from '@/components/auth/Audit.vue';

// Emits
const emit = defineEmits(['register']);

// Reactive data
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Features list
const features = ref([
  {
    title: "Bepul boshlang",
    description: "Hech qanday to'lov talabi yo'q"
  },
  {
    title: "Resume audit",
    description: "CV'ngizni avtomatik tahlil qilish"
  },
  {
    title: "Gamifikatsiya",
    description: "XP, badges va level tizimi"
  },
  {
    title: "15,000+ foydalanuvchi",
    description: "Katta jamiyat"
  }
]);

// Computed
const isFormValid = computed(() => {
  return (
      email.value &&
      password.value &&
      password.value.length >= 8 &&
      confirmPassword.value &&
      password.value === confirmPassword.value
  );
});

// Methods
const handleSubmit = () => {
  if (!isFormValid.value) {
    return;
  }

  // Emit register event
  emit('register', {
    email: email.value,
    password: password.value
  });

  // Navigate to verify email page (Vue Router kerak)
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  // router.push('/verify-email')

  console.log('Registration submitted:', {
    email: email.value,
    password: '***' // Password'ni log qilmaslik yaxshiroq
  });

  window.location.href = '/onboarding';
};

const handleGoogleSignup = () => {
  console.log('Google signup clicked');
  // Google OAuth logic here
};

const handleGithubSignup = () => {
  console.log('GitHub signup clicked');
  // GitHub OAuth logic here
};
</script>

<style scoped>
/* Additional custom styles if needed */
input:focus {
  outline: none;
}

/* Custom validation styles */
input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

input:valid:not(:placeholder-shown) {
  border-color: #10b981;
}
</style>