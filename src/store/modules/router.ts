// import routers from '@/router/router.json'
import routers from '@/router/router'
import { convertRouter } from '@/utils/routes'
import { resetRoute } from '@/router'
export default {
  name: 'router',
  namespaced: true,
  state: () => {
    const state: MyStore.RouterState = {
      roleType: 'headquarters', // 角色类型
      routes: {},
      cachedRoutes: []
    }
    return state
  },
  getters: {
    logoutUrl () {
      return '/login'
    }
  },
  mutations: {
    setRoutes (state: MyStore.RouterState, routes: MyStore.Route) {
      state.routes = routes
    },
    setRoleType (state: MyStore.RouterState, type: MyStore.RouterRoleType) {
      state.roleType = type
    },
    setCachedRoutes (state: MyStore.RouterState, routes: Array<MyStore.Route>) {
      state.cachedRoutes = routes
    }
  },
  actions: {
    async setRoutes ({ commit, state }: any) {
      // @ts-ignore
      const routes = routers[state.roleType]
      commit('setRoutes', routes)
      const syncRoutes = convertRouter([routes])
      resetRoute(syncRoutes)
    },
    async setCachedRoutes ({ commit }: any, routes: any) {
      commit('setCachedRoutes', routes)
    }
  }
}
