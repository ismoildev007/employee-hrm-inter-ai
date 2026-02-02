import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/main.css'
import "vue3-toastify/dist/index.css"
import Vue3Toastify from "vue3-toastify"
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(VueApexCharts, Vue3Toastify, { autoClose: 4000 })
app.config.globalProperties.$local = "http://localhost:8000/api"
app.config.globalProperties.$production = "https://api.inter-ai.uz/api"
app.use(router)
app.use(i18n)
app.mount('#app')
