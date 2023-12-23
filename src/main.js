import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createHead } from '@vueuse/head'
import { VueQueryPlugin } from 'vue-query'

import { authApi } from '@/api/auth.api.js'
import App from './App.vue'
import './assets/main.css'

import router from './router'

const app = createApp(App)
const store = createPinia()
// const head = createHead()

export default app
app.use(store).use(router).use(VueQueryPlugin).mount('#app')

authApi.refreshInterceptor()
