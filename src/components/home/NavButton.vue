<template>
  <button
      @click="$emit('click')"
      :class="[
      'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
      active
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-700 hover:bg-gray-100'
    ]"
  >
    <component :is="icon" class="w-4 h-4" />
    <span class="text-sm">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  icon: any;
  label: string;
  active: boolean;
}>();

defineEmits<{
  click: [];
}>();
</script>