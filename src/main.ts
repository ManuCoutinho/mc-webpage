import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { NLayout, NSpace, create } from 'naive-ui'
import '../src/assets/main.css'

import App from './App.vue'
import router from './router'

const naive = create({
	components: [NLayout, NSpace]
})
const pinia = createPinia()
const app = createApp(App).use(pinia).use(router).use(naive)

app.mount('#app')
/* like a error boundary */
//app.config.errorHandler = (err) =>