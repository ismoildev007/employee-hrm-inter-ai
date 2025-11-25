<template>
  <button
      @click="$emit('click')"
      :class="[
      'flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all',
      active
        ? 'border-blue-600 bg-blue-50 text-blue-600'
        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
    ]"
  >
    <component :is="getIcon" class="w-6 h-6" />
    <span class="text-sm">{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { Car, Bike, Home } from 'lucide-vue-next'

const props = defineProps({
  icon: String,
  label: String,
  active: Boolean
})

defineEmits(['click'])

const getIcon = computed(() => {
  const icons = { Car, Bike, Home }
  return icons[props.icon]
})
</script>