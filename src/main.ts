import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import { store, key } from './store'
import router from './router'
import VabConfig from '@/vab/index'

const app = createApp(App)
app.use(VabConfig)
app.use(store, key)
app.use(router)
app.mount('#app')
