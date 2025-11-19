<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <BellIcon class="w-6 h-6" />
          <h1 class="text-2xl md:text-3xl">Bildirishnomalar</h1>
        </div>
        <p class="text-gray-600">Platformadagi barcha yangiliklar va eslatmalar</p>
      </div>
      <div class="flex gap-2">
        <button @click="markAllAsRead" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Barchasini o'qilgan deb belgilash
        </button>
        <button @click="clearAll" class="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Tozalash
        </button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="w-full">
      <div class="flex gap-2 mb-6 border-b">
        <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="[
            'flex items-center gap-2 px-4 py-2 border-b-2 transition-colors',
            activeTab === tab.value
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent hover:text-gray-700'
          ]"
        >
          <component :is="tab.icon" class="w-4 h-4" />
          {{ tab.label }}
          <span
              v-if="tab.value === 'all' && unreadCount > 0"
              class="px-2 py-0.5 bg-gray-200 rounded-full text-xs"
          >
            {{ unreadCount }}
          </span>
        </button>
      </div>

      <!-- All Notifications -->
      <div v-if="activeTab === 'all'" class="space-y-3">
        <NotificationCard
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
      </div>

      <!-- Progress Notifications -->
      <div v-if="activeTab === 'progress'" class="space-y-3">
        <NotificationCard
            v-for="notification in progressNotifications"
            :key="notification.id"
            :notification="notification"
        />
        <div v-if="progressNotifications.length === 0" class="p-12 border-0 shadow-sm rounded-lg text-center">
          <TrendingUpIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-gray-500">Progress bildirishnomalar yo'q</p>
        </div>
      </div>

      <!-- Interview Notifications -->
      <div v-if="activeTab === 'interviews'" class="space-y-3">
        <NotificationCard
            v-for="notification in interviewNotifications"
            :key="notification.id"
            :notification="notification"
        />
        <div v-if="interviewNotifications.length === 0" class="p-12 border-0 shadow-sm rounded-lg text-center">
          <CalendarIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-gray-500">Interview bildirishnomalar yo'q</p>
        </div>
      </div>

      <!-- Payment Notifications -->
      <div v-if="activeTab === 'payments'" class="space-y-3">
        <NotificationCard
            v-for="notification in paymentNotifications"
            :key="notification.id"
            :notification="notification"
        />
        <div v-if="paymentNotifications.length === 0" class="p-12 border-0 shadow-sm rounded-lg text-center">
          <CreditCardIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-gray-500">Payment bildirishnomalar yo'q</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  Award as AwardIcon,
  MessageSquare as MessageSquareIcon,
  Briefcase as BriefcaseIcon,
  Bell as BellIcon
} from 'lucide-vue-next';
import NotificationCard from '@/components/NotificationCard.vue';

const activeTab = ref('all');

const notifications = ref([
  {
    id: 1,
    type: 'progress',
    icon: 'TrendingUpIcon',
    iconColor: 'text-blue-600',
    title: 'Growth Score oshdi',
    description: 'Sizning growth score 78 ga yetdi! +5% o\'sish.',
    time: '10 daqiqa oldin',
    read: false
  },
  {
    id: 2,
    type: 'interview',
    icon: 'CalendarIcon',
    iconColor: 'text-purple-600',
    title: 'Mock intervyu yaqinlashmoqda',
    description: 'Texnik suhbat 3 kun ichida boshlanadi. Tayyorgarlik ko\'ring!',
    time: '2 soat oldin',
    read: false
  },
  {
    id: 3,
    type: 'progress',
    icon: 'AwardIcon',
    iconColor: 'text-green-600',
    title: 'Yangi badge olindi!',
    description: 'Tabriklaymiz! "Consistent Learner - 7 days streak" badgeni oldingiz.',
    time: '5 soat oldin',
    read: false
  },
  {
    id: 4,
    type: 'jobs',
    icon: 'BriefcaseIcon',
    iconColor: 'text-orange-600',
    title: '12 ta yangi vakansiya',
    description: 'Sizga mos 12 ta yangi vakansiya topildi (Middle Developer, Tashkent)',
    time: '1 kun oldin',
    read: true
  },
  {
    id: 5,
    type: 'progress',
    icon: 'CheckCircleIcon',
    iconColor: 'text-green-600',
    title: 'Roadmap task bajarildi',
    description: 'Siz "Complete 5 skill tests" taskni bajardingiz. +100 XP',
    time: '2 kun oldin',
    read: true
  },
  {
    id: 6,
    type: 'interview',
    icon: 'MessageSquareIcon',
    iconColor: 'text-purple-600',
    title: 'Mock intervyu natijalari',
    description: 'Oddiy suhbat natijalari tayyor. 85% ball oldingiz!',
    time: '3 kun oldin',
    read: true
  },
  {
    id: 7,
    type: 'payment',
    icon: 'CreditCardIcon',
    iconColor: 'text-blue-600',
    title: 'To\'lov muvaffaqiyatli',
    description: 'Pro plan uchun to\'lov qabul qilindi. $29.99',
    time: '1 hafta oldin',
    read: true
  },
  {
    id: 8,
    type: 'progress',
    icon: 'TrendingUpIcon',
    iconColor: 'text-blue-600',
    title: 'Oylik progress report',
    description: 'Oktyabr oyida 24 ta zametka, 3 ta test va 2 ta mock intervyu bajarildi.',
    time: '1 hafta oldin',
    read: true
  }
]);

const tabs = ref([
  { value: 'all', label: 'Barchasi', icon: BellIcon },
  { value: 'progress', label: 'Progress', icon: TrendingUpIcon },
  { value: 'interviews', label: 'Interviews', icon: CalendarIcon },
  { value: 'payments', label: 'Payments', icon: CreditCardIcon }
]);

const progressNotifications = computed(() =>
    notifications.value.filter(n => n.type === 'progress')
);

const interviewNotifications = computed(() =>
    notifications.value.filter(n => n.type === 'interview')
);

const paymentNotifications = computed(() =>
    notifications.value.filter(n => n.type === 'payment')
);

const unreadCount = computed(() =>
    notifications.value.filter(n => !n.read).length
);

const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true);
};

const clearAll = () => {
  if (confirm('Barcha bildirishnomalarni o\'chirmoqchimisiz?')) {
    notifications.value = [];
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>