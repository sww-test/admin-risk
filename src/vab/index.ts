// 引入全局样式
import './styles/index.scss'
import { App } from 'vue'
import 'virtual:svg-icons-register'

const install = (app: App) => {
  // 引入全局组件
  const components = import.meta.globEager('./components/*/index.vue')
  for (const path in components) {
    app.component(components[path].default.name, components[path].default)
  }
  // 引入全局插件
  const plugins = import.meta.globEager('./plugins/*.ts')
  for (const path in plugins) {
    app.use(plugins[path].default)
  }
}

export default install
