import { App } from 'vue'

import { createI18n } from 'vue-i18n'
import { store } from '@/store'

const install = (app: App) => {
  const messages = {
    en: {
      // 定义你自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
      message: {
        hello: 'hello world'
      }
    },
    'zh-cn': {
      // 定义你自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
      message: {
        hello: '你好，世界'
      }
    }
  }
  const i18n = createI18n({
    locale: store.getters['setting/language'],
    fallbackLocale: 'en',
    // @ts-ignore
    messages
  })
  app.use(i18n)
}
export default install
