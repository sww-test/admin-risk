import { App } from 'vue'
import request from '@/utils/request'
import router from '@/router'
import { store } from '@/store'
/**
 * @name: sww
 * @date: 2021-06-29
 * @desc: 获取表格高度
 */
const baseTableHeight = (formType: number = 1): number => {
  const mainInfo = store.getters.layoutMainInfo
  return (mainInfo.height - 130) * formType
}

/**
 * @name: sww
 * @date: 2021-06-29
 * @desc: 路由跳转 根据path结构判断跳转方式
 */
const linkTo = (path: string, query?: any): void => {
  if (!path) return
  if (path.includes('/')) {
    router.push({
      path,
      query
    })
  } else {
    router.push({
      name: path,
      params: query
    })
  }
}

/**
 * @name: sww
 * @date: 2021-07-19
 * @desc: 在线预览文档
 * @param: src 资源地址
 */
const openDocument = (src: string): void => {
  src = formatImage(src)
  if (!/\.(pdf|PDF)$/.test(src)) {
    openBlank(`https://view.officeapps.live.com/op/view.aspx?src=${src}`)
  } else {
    openBlank(src)
  }
}

/**
 * @name: sww
 * @date: 2021-07-19
 * @desc: 在新页面打开地址
 */
const openBlank = (src: string): void => {
  src = formatImage(src)
  window.open(
    src,
    '_blank'
  )
}

/**
 * @name: sww
 * @date: 2021-07-19
 * @desc: 格式化网络资源
 */
const formatImage = (src: string): string => {
  if (!src) return ''
  if (src.includes('http')) return src
  return `${import.meta.env.VITE_RES_URL}${src}`
}

const install = (app: App) => {
  // 注册请求实例
  app.config.globalProperties.$request = request
  app.config.globalProperties.$baseTableHeight = baseTableHeight
  app.config.globalProperties.$linkTo = linkTo
  app.config.globalProperties.$openDocument = openDocument
  app.config.globalProperties.$image = formatImage
  app.config.globalProperties.$openBlank = openBlank
}

export default install
