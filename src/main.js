import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/styles/normalize.css"

import 'uno.css'

import App from './App.vue'
import router from './router'

// import { Message } from '@arco-design/web-vue';

const app = createApp(App);

// Message._context = app._context;

app.use(createPinia())
app.use(router)

app.mount('#app')
