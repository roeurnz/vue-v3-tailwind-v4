import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './css/tailwind.css'
import i18n from './i18n'

import App from './App.vue'
import router from './routes/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n).mount('#app')