export default {
  setCount: (state: MyStore.State, count: number) => {
    state.count = count
  },
  /**
   * 监听窗口变化，更新到store
   * @param state
   * @param info
   */
  setWindowInfo: (state: MyStore.State, info: any) => {
    state.layoutInfo.windowInfo = info
  }
}
