import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import components from './components/styled-library/index'

const app = createApp(App)
const store = createPinia()
const head = createHead()

export default app
app.use(store).use(router).use(head).mount('#app')
