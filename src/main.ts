import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'vue3-toastify/dist/index.css'
import 'vue3-carousel/dist/carousel.css'

const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

app.use(router)
app.use(pinia)
app.use(Vue3Toasity, {
  autoClose: 2000,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  theme: 'colored',
} as ToastContainerOptions)
app.mount('#app')
