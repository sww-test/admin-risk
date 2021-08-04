export default {
  namespaced: true,
  state () {
    const state: MyStore.SettingState = {
      language: 'zh-cn'
    }
    return state
  },
  getters: {
    language: (state: MyStore.SettingState) => state.language
  },
  mutations: {
    /**
     *
     * @param state
     * @param language
     */
    setLanguage: (state: MyStore.SettingState, language: MyStore.language) => {
      state.language = language
    }
  }
}
