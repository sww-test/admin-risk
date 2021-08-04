export default {
  name: 'layout',
  namespaced: true,
  state () {
    const state: MyStore.LayoutState = {
      showAsideMenu: true
    }
    return state
  },
  getters: {
    asideMenuWidth: (state: MyStore.LayoutState, getters: any, rootState: MyStore.State) => {
      if (state.showAsideMenu) {
        return rootState.layoutInfo.aside.width
      } else {
        return 0
      }
    }
  },
  mutations: {
    setShowAsideMenu (state: MyStore.LayoutState) {
      state.showAsideMenu = !state.showAsideMenu
    }
  }
}
