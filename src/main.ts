import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/scss/main.scss'
createApp(App).use(i18n).use(pinia).use(Toast).use(router).mount('#app')
