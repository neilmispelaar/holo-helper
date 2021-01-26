import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";

import './assets/styles/main.css'

let app = createApp(App)

// Use the vue-router
app.use(router)

// Mount the router
app.mount('#app')
