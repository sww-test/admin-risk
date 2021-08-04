import { ActionContext } from 'vuex'

export default {
  name: 'user',
  namespaced: true,
  state: () => {
    const state: MyStore.UserState = {
      token: '', //
      userInfo: {}
    }
    return state
  },
  getters: {
    token: (state: MyStore.UserState) => state.token,
    userInfo: (state: MyStore.UserState) => state.userInfo
  },
  mutations: {
    setUserInfo (state: MyStore.UserState, info: MyStore.UserInfo) {
      state.userInfo = info
    },
    setToken (state: MyStore.UserState, token: string) {
      state.token = token
    }
  },
  actions: {
    async logout ({ dispatch }: ActionContext<MyStore.UserState, MyStore.State>) {
      await dispatch('resetAll')
    },
    async resetAll ({ commit }: ActionContext<MyStore.UserState, MyStore.State>) {
      commit('setUserInfo', {})
      commit('setToken', '')
      commit('router/setRoutes', [], { root: true })
      // commit('router/setRoleType', '', { root: true })
    },
    async loginAdmin ({ commit }: ActionContext<MyStore.UserState, MyStore.State>, roleType: MyStore.RouterRoleType): Promise<any> {
      const info = {
        data: {
          userId: '10051570',
          companyNo: '914400007265265110',
          userRole: roleType
        }
      }
      commit('setUserInfo', info.data)
      commit('setToken', info.data.userId)
      commit('router/setRoleType', info.data.userRole, { root: true })
      return info
    }
  }
}
