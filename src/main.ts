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

components.forEach((comp) => {
  console.log(comp)
  app.component(comp.name, comp)
})

app.use(store)
app.use(router)
app.use(head)
app.mount('#app')
