import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import SettingModule from './modules/setting'
import RouterModule from './modules/router'
import UserModule from './modules/user'
import LayoutModule from './modules/layout'

export const key: InjectionKey<Store<MyStore.State>> = Symbol('')

export const store = createStore<MyStore.State>({
  state: {
    count: 0,
    layoutInfo: { // 布局信息
      windowInfo: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
      header: {
        height: 82
      },
      aside: {
        width: 234
      },
      breadcrumb: {
        height: 96
      },
      main: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24
      }
    }
  },
  mutations,
  modules: {
    setting: SettingModule,
    router: RouterModule,
    user: UserModule,
    layout: LayoutModule
  },
  plugins: [
    createPersistedState({
      key: 'my-first-vite',
      paths: ['user.token', 'user.userInfo', 'router.roleType', 'layout.showAsideMenu', 'setting.language'],
      storage: {
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, value: any) => localStorage.setItem(key, value),
        removeItem: (key: string) => localStorage.removeItem(key)
      }
    })
  ]
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
