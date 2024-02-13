import { createApp } from 'vue'
import './assets/layout/style.scss'
import App from './App.vue'
import router from './router/router.js'

createApp(App).use(router).mount('#app')
