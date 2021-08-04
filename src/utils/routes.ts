/**
 * @name: sww
 * @date: 2021-06-28
 * 路由组件拼装，第一次是直接多级嵌套拼接，后面出现keep-alive的多级缓存问题
 * 解决思路1：组合所有路由，全部设置成一级路由，只是路由结构还保持着类似路由嵌套的模式
 * 解决思路2：router.json文件直接配置成一级路由，但是处理menu菜单时，还是要通过方法组装成嵌套模式。
 * 当前选择思路1，router.json还是嵌套结构，在resetRouter方法再解构成一级路由模式。
 */
export function convertRouter (asyncRoutes: Array<any>, parentUrl: string = ''): any {
  return asyncRoutes.map(route => {
    // 动态拼接组件，但是发布到线上后失效，暂时搁置
    // if (route.component) {
    //   if (route.component === 'Layout') {
    //     route.component = () => import('../views/layout/index.vue')
    //   } else {
    //     const index = route.component.indexOf('views')
    //     const path =
    //         index > 0 ? route.component.slice(index) : `views/${route.component}`
    //     // route.component = () => import(`../${path}/index.vue`)
    //     route.component = defineAsyncComponent(() => import(`../${path}/index.vue`))
    //   }
    // }
    // 检测meta
    // fullPath 左侧menu使用，用来激活
    // realPath 组件全路径，用来注册路由
    if (!route.meta) route.meta = { hidden: false, fullPath: '', realPath: '' }
    if (!parentUrl) {
      // 第一级没有传入 parentUrl
      route.meta.fullPath = route.path
      route.meta.realPath = route.path
    } else if (route.meta.hidden) {
      // 如果隐藏当前，不在menu展示，则fullPath设置为上一级路由
      route.meta.fullPath = parentUrl
      route.meta.realPath = `${parentUrl}/${route.path}`
    } else {
      route.meta.fullPath = `${parentUrl}/${route.path}`
      route.meta.realPath = `${parentUrl}/${route.path}`
    }

    if (route.children && route.children.length) { route.children = convertRouter(route.children, route.meta.fullPath) }
    if (route.children && route.children.length === 0) delete route.children
    return route
  })
}
