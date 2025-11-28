  <template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl mb-6">AviaBooking</h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-50">
            Sayohat, Ijara va Mehmonxona uchun Yagona Ekotizim
          </p>
          <p class="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
            Mehmonxona, uy-joy, avtomobil va texnikalarni ijaraga olish, bilet sotib olish va sayohatingizni rejalashtirish — hammasi bitta platformada
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="/hotel"
                class="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Mehmonxona qidirish
            </a>
            <a href="/ticket-planner"
                class="px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Sayohatni rejalashtirish
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl text-center mb-12 text-gray-900">
        Xizmatlarimiz</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/hotel" class="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group text-left">
            <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-hotel w-8 h-8 text-blue-600">
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
            <h3 class="text-xl mb-2 text-gray-900">Mehmonxonalar</h3>
            <p class="text-gray-600">Eng yaxshi mehmonxonalarni toping va bron qiling</p>
          </a>
          <a href="/rent" class="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group text-left">
            <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-house w-8 h-8 text-purple-600">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path
                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl mb-2 text-gray-900">Uy-joy ijarasi</h3>
            <p class="text-gray-600">Qisqa va uzoq muddatli ijara</p>
          </a>
          <a href="/rent" class="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group text-left">
            <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-car w-8 h-8 text-green-600">
                <path
                    d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
            <h3 class="text-xl mb-2 text-gray-900">Transport ijarasi</h3>
            <p class="text-gray-600">Avtomobil, skuter, velosiped</p>
          </a>
          <a href="/tickets" class="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group text-left">
            <div
                class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-ticket w-8 h-8 text-orange-600">
                <path
                    d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
            </div>
            <h3 class="text-xl mb-2 text-gray-900">Biletlar</h3>
            <p class="text-gray-600">Avia, avtobus, tadbirlar</p></a>
        </div>
      </div>
    </section>

    <!-- Trip Planner CTA -->
    <section class="py-16 bg-gradient-to-br from-purple-100 to-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <div
                  class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="lucide lucide-calculator w-8 h-8 text-white">
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
              </div>
              <h3 class="text-3xl mb-4 text-gray-900">AI Sayohat Kalkulyatori</h3>
              <p class="text-lg text-gray-600 mb-6">Sayohatingizni rejalashtiring, budjetni hisoblang va AI tavsiyalarni
                oling. Transport, turar joy, ovqat va barcha xarajatlarni avtomatik hisoblab beramiz.</p>
              <a href="/ticket-planner"
                  class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all">
                Hozir rejalashtirish
              </a>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-4">
              <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div class="text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="lucide lucide-globe w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <p class="text-sm text-gray-700">200+ shaharlar</p></div>
              <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div class="text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="lucide lucide-calculator w-6 h-6">
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
                </div>
                <p class="text-sm text-gray-700">Budjet hisoblash</p></div>
              <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div class="text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="lucide lucide-trending-up w-6 h-6">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <p class="text-sm text-gray-700">AI tavsiyalar</p></div>
              <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div class="text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="lucide lucide-clock w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <p class="text-sm text-gray-700">Real vaqt narxlari</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl text-center mb-12 text-gray-900">Nima
        uchun AviaBooking?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-shield w-12 h-12 text-blue-600">
                <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">Ishonchli va xavfsiz</h3>
            <p class="text-gray-600">Barcha to'lovlar xavfsiz amalga oshiriladi. Tekshirilgan mehmonxona va ijara
              punktlari.</p></div>
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-clock w-12 h-12 text-purple-600">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">24/7 Yordam</h3>
            <p class="text-gray-600">Har qanday vaqtda mijozlar xizmati. Telegram bot orqali tezkor javoblar.</p></div>
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="lucide lucide-trending-up w-12 h-12 text-green-600">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h3 class="text-xl mb-3 text-gray-900">Eng yaxshi narxlar</h3>
            <p class="text-gray-600">Dinamik narxlash tizimi. Maxsus chegirmalar va bonuslar.</p></div>
        </div>
      </div>
    </section>

    <!-- B2B Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl mb-6">Biznesingiz uchun CRM tizimi</h2>
          <p class="text-lg text-gray-300 mb-8">
            Mehmonxona va ijara biznesini boshqarish uchun to'liq CRM platforma. Buyurtmalar, kalendar, analytics, va
            ko'plab boshqa imkoniyatlar.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <div class="px-6 py-3 bg-gray-800 rounded-lg">✓ Buyurtmalarni boshqarish</div>
            <div class="px-6 py-3 bg-gray-800 rounded-lg">✓ Dinamik narxlash</div>
            <div class="px-6 py-3 bg-gray-800 rounded-lg">✓ Analytics & KPI</div>
            <div class="px-6 py-3 bg-gray-800 rounded-lg">✓ Inventar boshqaruvi</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl text-blue-600 mb-2">10,000+</div>
            <div class="text-gray-600">Faol foydalanuvchilar</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl text-blue-600 mb-2">500+</div>
            <div class="text-gray-600">Mehmonxonalar</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl text-blue-600 mb-2">1,000+</div>
            <div class="text-gray-600">Transport vositalari</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">Shaharlar</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import {
  Hotel,
  Home,
  Car,
  Ticket,
  Calculator,
  Globe,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-vue-next";

defineEmits(["set-page"]);

// Child components
const ServiceCard = {
  props: ["icon", "title", "description", "gradient"],
  emits: ["click"],
  template: `
    <button
      @click="$emit('click')"
      class="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all group text-left"
    >
      <div :class="['w-16 h-16 bg-gradient-to-br', gradient, 'rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform']">
        <component :is="icon" class="w-8 h-8 text-white" />
      </div>
      <h3 class="text-xl mb-2 text-gray-900">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </button>
  `,
};

const FeatureBox = {
  props: ["icon", "text"],
  template: `
    <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
      <div class="text-purple-600 mb-2">
        <component :is="icon" class="w-6 h-6" />
      </div>
      <p class="text-sm text-gray-700">{{ text }}</p>
    </div>
  `,
};

const Feature = {
  props: ["icon", "title", "description"],
  template: `
    <div class="text-center">
      <div class="flex justify-center mb-4">
        <component :is="icon" class="w-12 h-12 text-blue-600" />
      </div>
      <h3 class="text-xl mb-3 text-gray-900">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  `,
};

const Stat = {
  props: ["number", "label"],
  template: `
    <div class="text-center">
      <div class="text-3xl md:text-4xl text-blue-600 mb-2">{{ number }}</div>
      <div class="text-gray-600">{{ label }}</div>
    </div>
  `,
};
</script>