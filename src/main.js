import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'remixicon/fonts/remixicon.css'
import QrReader from 'vue3-qr-reader';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia(), QrReader)
app.use(router)

app.mount('#app')
