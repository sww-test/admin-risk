// 项目名称
export const title: string = '风控管理平台'
// 标题分隔符
export const titleSeparator: string = ' - '
// 标题是否反转
// 如果为false: "page - title"
// 如果为ture : "title - page"
export const titleReverse: boolean = true
// 缓存路由的最大数量
export const keepAliveMaxNum: number = 20
// 路由模式，可选值为 history 或 hash
export const routerMode: 'hash' | 'history' = 'hash'
// 不经过token校验的路由
export const routesWhiteList: string[] = [
  '/login',
  '/login/vip',
  '/404',
  '/403'
]
// 是否开启登录拦截
export const loginInterception: boolean = true
