declare namespace MyStore {
  type language = 'zh-cn' | 'en'
  type RouterRoleType = 'administrators' | 'headquarters' | 'subsidiary'
  interface RouteMeta {
    title: string,
    icon: string,
    hidden: boolean,
    noKeepAlive: boolean,
    fullPath: string,
    realPath: string
  }
  interface Route {
    path?: string,
    component?: any,
    redirect?: string,
    name?: string,
    meta?: RouteMeta,
    children?: Array<Route>
  }
  interface State {
    count: number,
    layoutInfo: {
      windowInfo: {
        width: number,
        height: number
      },
      header: {
        height: number
      },
      aside: {
        width: number
      },
      breadcrumb: {
        height: number
      },
      main: {
        paddingLeft: number,
        paddingRight: number,
        paddingBottom: number
      }
    }
  }
  interface SettingState {
    language: language
  }
  interface RouterState {
    roleType: RouterRoleType,
    routes: Route,
    cachedRoutes: Array<Route>
  }
  interface UserInfo {
    userId?: string,
    companyNo?: string,
    userRole?: RouterRoleType
  }
  interface UserState {
    token: string,
    userInfo: UserInfo
  }
  interface LayoutState {
    showAsideMenu: boolean
  }
}
