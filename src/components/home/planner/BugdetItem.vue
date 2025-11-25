<template>
  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div class="flex items-center gap-3">
      <component :is="iconComponent" class="w-5 h-5 text-blue-600" />
      <span class="text-gray-700">{{ label }}</span>
    </div>
    <span class="text-gray-900">{{ amount.toLocaleString() }} so'm</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})
</script>