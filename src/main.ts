import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { NLayout, NSpace, create } from 'naive-ui'
import '../src/assets/main.css'

import App from './App.vue'
import router from './router'

const naive = create({
	components: [NLayout, NSpace]
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
/* like a error boundary */
//app.config.errorHandler = (err) =>
app.mount('#app')
