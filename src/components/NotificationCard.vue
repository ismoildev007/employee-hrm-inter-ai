<template>
  <div :class="['p-4 border-0 shadow-sm rounded-lg', notification.read ? 'bg-white' : 'bg-blue-50']">
    <div class="flex gap-4">
      <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        <component :is="getIcon(notification.icon)" :class="['w-5 h-5', notification.iconColor]" />
      </div>
      <div class="flex-1">
        <div class="flex items-start justify-between mb-1">
          <h3 class="font-medium">{{ notification.title }}</h3>
          <div v-if="!notification.read" class="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
        </div>
        <p class="text-sm text-gray-600 mb-2">{{ notification.description }}</p>
        <span class="text-xs text-gray-500">{{ notification.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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

defineProps({
  notification: {
    type: Object,
    required: true
  }
});

const iconMap = {
  'TrendingUpIcon': TrendingUpIcon,
  'CalendarIcon': CalendarIcon,
  'AwardIcon': AwardIcon,
  'BriefcaseIcon': BriefcaseIcon,
  'CheckCircleIcon': CheckCircleIcon,
  'MessageSquareIcon': MessageSquareIcon,
  'CreditCardIcon': CreditCardIcon,
  'BellIcon': BellIcon
};

const getIcon = (iconName) => {
  return iconMap[iconName] || BellIcon;
};
</script>

<style scoped>
/* Additional styles if needed */
</style>