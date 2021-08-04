import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import { loginInterception, routerMode, routesWhiteList, title, titleReverse } from '@/config/setting.config'
import Layout from '@/views/layout/index.vue'
import VabProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

// 每次刷新都重新加载权限路由
let routerLoad = false

VabProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/index/index.vue'),
    meta: {
      noKeepAlive: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: routerMode === 'hash'
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes
})

export function resetRoute (routes: any): void {
  router.addRoute({
    path: '/',
    component: Layout,
    redirect: '/home',
    children: getAllFirstRoute(routes)
  })
}

/**
 * 解构成一级路由，解决多级嵌套的keep-alive问题
 * @param routes
 * @param result
 */
function getAllFirstRoute (routes: any, result: any = []): any {
  routes.forEach((route: any) => {
    result.push({
      ...route,
      children: [],
      path: route.meta.realPath
    })
    if (route.children && route.children.length > 0) {
      result = getAllFirstRoute(route.children, result)
    }
  })
  return result
}

router.beforeEach(async (to, from, next) => {
  VabProgress.start()
  let hasToken = store.getters['user/token']
  if (!loginInterception) hasToken = true
  if (routesWhiteList.includes(to.path)) {
    // 白名单内的不做验证
    next()
  } else if (hasToken) {
    // 已登录
    if (routerLoad) {
      next()
    } else {
      await store.dispatch('router/setRoutes')
      routerLoad = true
      next(to.path)
    }
  } else {
    // 未登录
    next(store.getters['router/logoutUrl'])
  }
  VabProgress.done()
})

router.afterEach(route => {
  if (route.meta && route.meta.title) {
    if (titleReverse) {
      document.title = `${route.meta.title} - ${title}`
    } else {
      document.title = `${title} - ${route.meta.title}`
    }
  }
})

export default router
