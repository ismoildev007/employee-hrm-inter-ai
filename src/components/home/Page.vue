<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span class="text-xl font-semibold">CareerTrack</span>
          </div>
          <nav class="hidden md:flex items-center gap-6">
            <a href="#features" class="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" class="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#companies" class="text-gray-600 hover:text-gray-900">For Companies</a>
            <a href="#how-it-works" class="text-gray-600 hover:text-gray-900">How it works</a>
          </nav>
          <div class="flex items-center gap-3">
            <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Login</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start Free Trial</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
      <div class="container mx-auto px-4 py-24 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <span class="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            🚀 15,000+ professional foydalanmoqda
          </span>
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Karyerangizni Keyingi Darajaga Olib Chiqing
          </h1>
          <p class="text-2xl text-gray-600 mb-8 leading-relaxed">
            AI-powered platforma bilan o'sish sur'atingizni 3x ga oshiring va <br />
            6 oy ichida orzuyingizdagi lavozimga erishing
          </p>
          <div class="flex items-center justify-center gap-4 mb-12">
            <button class="text-lg px-10 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
              Bepul Boshlash
            </button>
            <button class="text-lg px-10 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
              Demo Ko'rish
            </button>
          </div>

          <!-- Dashboard Preview Mockup -->
          <div class="rounded-3xl border-8 border-gray-200 bg-white shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="aspect-video bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-8">
              <div class="grid grid-cols-3 gap-4 h-full">
                <div class="bg-white rounded-2xl p-4 shadow-lg">
                  <div class="h-3 w-20 bg-gray-200 rounded mb-3"></div>
                  <div class="h-8 w-full bg-blue-100 rounded"></div>
                </div>
                <div class="bg-white rounded-2xl p-4 shadow-lg col-span-2">
                  <div class="h-3 w-24 bg-gray-200 rounded mb-3"></div>
                  <div class="h-full bg-gradient-to-r from-blue-100 to-purple-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4">Nima Uchun CareerTrack?</h2>
          <p class="text-xl text-gray-600">Raqamlar o'zi gapiradi</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(prop, index) in valueProps" :key="index" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur-xl"></div>
            <div class="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all">
              <div :class="`w-20 h-20 rounded-2xl bg-gradient-to-r ${prop.color} flex items-center justify-center text-white mb-6 shadow-lg`">
                <component :is="prop.icon" class="w-12 h-12" />
              </div>
              <div :class="`text-5xl font-bold mb-4 bg-gradient-to-r ${prop.color} bg-clip-text text-transparent`">
                {{ prop.stat }}
              </div>
              <h3 class="text-2xl font-semibold mb-3">{{ prop.title }}</h3>
              <p class="text-gray-600">{{ prop.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div class="text-6xl font-bold mb-3">250+</div>
            <div class="text-xl text-blue-100">Kompaniyalar foydalanmoqda</div>
          </div>
          <div>
            <div class="text-6xl font-bold mb-3">15,000+</div>
            <div class="text-xl text-blue-100">Aktiv foydalanuvchilar</div>
          </div>
          <div>
            <div class="text-6xl font-bold mb-3">3,500+</div>
            <div class="text-xl text-blue-100">Muvaffaqiyatli upgrade</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container mx-auto px-4 py-24">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Platformaning imkoniyatlari</h2>
        <p class="text-xl text-gray-600">Karyerangizni rivojlantirish uchun barcha kerakli vositalar</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all group">
          <div class="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">
            <component :is="feature.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 text-lg">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="bg-gradient-to-br from-blue-50 to-purple-50 py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4">Qanday Ishlaydi?</h2>
          <p class="text-xl text-gray-600">3 ta oddiy qadamda karyerangizni boshqaring</p>
        </div>
        <div class="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">1</div>
            <h3 class="text-2xl font-semibold mb-3">Resume Upload</h3>
            <p class="text-gray-600 text-lg">CV'ngizni yuklang va AI bilan avtomatik tahlil qiling</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">2</div>
            <h3 class="text-2xl font-semibold mb-3">Darajani Tasdiqlang</h3>
            <p class="text-gray-600 text-lg">Testlar orqali haqiqiy darajangizni aniqlang</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-pink-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">3</div>
            <h3 class="text-2xl font-semibold mb-3">O'sing va Rivojlaning</h3>
            <p class="text-gray-600 text-lg">Shaxsiy roadmap bo'yicha keyingi darajaga erishing</p>
          </div>
        </div>
      </div>
    </section>

    <!-- For Companies Section -->
    <section id="companies" class="py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <svg class="w-20 h-20 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <h2 class="text-5xl font-bold mb-6">Kompaniyalar uchun</h2>
          <p class="text-2xl text-gray-600 mb-12">
            Team'ning skill levelini tracking qiling, growth planlar yarating va progress reportlarni oling
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-xl font-semibold mb-3">Team Tracking</h3>
              <p class="text-gray-600">Jamoangizning o'sishini kuzatib boring</p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-xl font-semibold mb-3">Growth Plans</h3>
              <p class="text-gray-600">Shaxsiy rivojlanish rejalari</p>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <svg class="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-xl font-semibold mb-3">Progress Reports</h3>
              <p class="text-gray-600">Batafsil hisobotlar va analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-gradient-to-br from-blue-50 to-purple-50 py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4">Foydalanuvchilar fikri</h2>
          <p class="text-xl text-gray-600">Minglab professionallar biz bilan o'sishmoqda</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {{ testimonial.avatar }}
              </div>
              <div>
                <div class="text-lg font-semibold">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
              </div>
            </div>
            <p class="text-gray-600 text-lg">"{{ testimonial.text }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl font-bold mb-6">Bugun Boshlang</h2>
        <p class="text-2xl mb-8 text-blue-100">
          Bepul trial bilan barcha imkoniyatlardan foydalaning
        </p>
        <button class="text-xl px-12 py-6 bg-white text-blue-600 rounded-lg shadow-2xl hover:scale-105 transition-transform font-semibold">
          Hozir Boshlash - Bepul
        </button>
        <p class="mt-6 text-blue-100">No credit card required • 14 days free trial</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 text-white mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <span class="font-semibold">CareerTrack</span>
            </div>
            <p class="text-sm">Karyerangizni rivojlantiring</p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">Features</a></li>
              <li><a href="#" class="hover:text-white">Pricing</a></li>
              <li><a href="#" class="hover:text-white">For Companies</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">Contact</a></li>
              <li><a href="#" class="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">About</a></li>
              <li><a href="#" class="hover:text-white">Terms</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 CareerTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Icon components (simplified SVG representations)
const ZapIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
};

const ShieldIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
};

const BarChartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
};

const LineChartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>`
};

const TargetIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
};

const MessageIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
};

const TrendingUpIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`
};

const BriefcaseIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};

const AwardIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`
};

const features = ref([
  {
    icon: LineChartIcon,
    title: "Career Dashboard & Statistika",
    description: "Real vaqtda o'sish sur'atingizni kuzatib boring"
  },
  {
    icon: TargetIcon,
    title: "Resume Auditi & Market Comparison",
    description: "CV'ngizni tahlil qiling va bozor bilan solishtiring"
  },
  {
    icon: MessageIcon,
    title: "Mock Intervyu",
    description: "Oddiy va texnik suhbatlarga tayyorlaning"
  },
  {
    icon: TrendingUpIcon,
    title: "Growth Roadmap & Testlar",
    description: "Shaxsiy o'sish rejangizni yarating"
  },
  {
    icon: BriefcaseIcon,
    title: "Vakansiyalarni Avtomatik Topish",
    description: "LinkedIn va HH'dan mos vakansiyalar"
  },
  {
    icon: AwardIcon,
    title: "Gamifikatsiya",
    description: "XP, badges va level tizimi"
  }
]);

const valueProps = ref([
  {
    icon: ZapIcon,
    title: "3x Tezroq O'sish",
    description: "An'anaviy usullarga nisbatan 3 barobar tezroq professional rivojlanish",
    stat: "3x",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: ShieldIcon,
    title: "95% Muvaffaqiyat",
    description: "Platformadan foydalanuvchilarning 95% i keyingi darajaga o'tdi",
    stat: "95%",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChartIcon,
    title: "40% Maosh O'sishi",
    description: "O'rtacha 6 oy ichida maosh 40% ga oshadi",
    stat: "+40%",
    color: "from-blue-500 to-purple-500"
  }
]);

const testimonials = ref([
  {
    name: "Aziz Rahimov",
    role: "Frontend Developer",
    text: "3 oyda Junior'dan Middle'ga o'tdim va maoshim 50% ga oshdi. Platform juda foydali!",
    avatar: "AR"
  },
  {
    name: "Malika Aliyeva",
    role: "Product Designer",
    text: "Resume audit va mock interview menga dream job topishda yordam berdi. Tavsiya qilaman!",
    avatar: "MA"
  },
  {
    name: "Bobur Karimov",
    role: "Backend Developer",
    text: "Roadmap va tracking tizimi ajoyib. Endi aniq bilaman qayerga boraman.",
    avatar: "BK"
  }
]);
</script>

<style scoped>
/* Tailwind CSS ishlatiladi, qo'shimcha stillarga ehtiyoj yo'q */
</style>