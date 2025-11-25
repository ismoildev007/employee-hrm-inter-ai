  <template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl mb-6">SuperTrip</h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-50">
            Sayohat, Ijara va Mehmonxona uchun Yagona Ekotizim
          </p>
          <p class="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
            Mehmonxona, uy-joy, avtomobil va texnikalarni ijaraga olish, bilet sotib olish va sayohatingizni rejalashtirish — hammasi bitta platformada
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <button
                @click="$emit('set-page', 'hotels')"
                class="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Mehmonxona qidirish
            </button>
            <button
                @click="$emit('set-page', 'trip-planner')"
                class="px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Sayohatni rejalashtirish
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl text-center mb-12 text-gray-900">Xizmatlarimiz</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
              :icon="Hotel"
              title="Mehmonxonalar"
              description="Eng yaxshi mehmonxonalarni toping va bron qiling"
              @click="$emit('set-page', 'hotels')"
              gradient="from-blue-500 to-cyan-500"
          />
          <ServiceCard
              :icon="Home"
              title="Uy-joy ijarasi"
              description="Qisqa va uzoq muddatli ijara"
              @click="$emit('set-page', 'rentals')"
              gradient="from-purple-500 to-pink-500"
          />
          <ServiceCard
              :icon="Car"
              title="Transport ijarasi"
              description="Avtomobil, skuter, velosiped"
              @click="$emit('set-page', 'rentals')"
              gradient="from-green-500 to-emerald-500"
          />
          <ServiceCard
              :icon="Ticket"
              title="Biletlar"
              description="Avia, avtobus, tadbirlar"
              @click="$emit('set-page', 'tickets')"
              gradient="from-orange-500 to-red-500"
          />
        </div>
      </div>
    </section>

    <!-- Trip Planner CTA -->
    <section class="py-16 bg-gradient-to-br from-purple-100 to-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <component :is="Calculator" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-3xl mb-4 text-gray-900">AI Sayohat Kalkulyatori</h3>
              <p class="text-lg text-gray-600 mb-6">
                Sayohatingizni rejalashtiring, budjetni hisoblang va AI tavsiyalarni oling. Transport, turar joy, ovqat va barcha xarajatlarni avtomatik hisoblab beramiz.
              </p>
              <button
                  @click="$emit('set-page', 'trip-planner')"
                  class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Hozir rejalashtirish
              </button>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-4">
              <FeatureBox :icon="Globe" text="200+ shaharlar" />
              <FeatureBox :icon="Calculator" text="Budjet hisoblash" />
              <FeatureBox :icon="TrendingUp" text="AI tavsiyalar" />
              <FeatureBox :icon="Clock" text="Real vaqt narxlari" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl text-center mb-12 text-gray-900">Nima uchun SuperTrip?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
              :icon="Shield"
              title="Ishonchli va xavfsiz"
              description="Barcha to'lovlar xavfsiz amalga oshiriladi. Tekshirilgan mehmonxona va ijara punktlari."
          />
          <Feature
              :icon="Clock"
              title="24/7 Yordam"
              description="Har qanday vaqtda mijozlar xizmati. Telegram bot orqali tezkor javoblar."
          />
          <Feature
              :icon="TrendingUp"
              title="Eng yaxshi narxlar"
              description="Dinamik narxlash tizimi. Maxsus chegirmalar va bonuslar."
          />
        </div>
      </div>
    </section>

    <!-- B2B Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl mb-6">Biznesingiz uchun CRM tizimi</h2>
          <p class="text-lg text-gray-300 mb-8">
            Mehmonxona va ijara biznesini boshqarish uchun to'liq CRM platforma. Buyurtmalar, kalendar, analytics, va ko'plab boshqa imkoniyatlar.
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
          <Stat number="10,000+" label="Faol foydalanuvchilar" />
          <Stat number="500+" label="Mehmonxonalar" />
          <Stat number="1,000+" label="Transport vositalari" />
          <Stat number="50+" label="Shaharlar" />
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