<script setup>
import { provideI18n } from './i18n-lite'
import { useRouter } from "vue-router";
provideI18n()
const router = useRouter()

</script>

<template>
  <router-view />
</template>

<style>
.iti input[type="tel"]:focus {
  border: 2px solid orange !important;
  outline: none !important;
  box-shadow: none !important;
}

</style>