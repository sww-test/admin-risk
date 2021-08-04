<template>
  <el-config-provider :locale="localLanguage">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import { mapMutations } from 'vuex'
import { computed, defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useStore } from '@/store'
export default defineComponent({
  setup () {
    const store = useStore()
    const localLanguage = computed(() => {
      switch (store.getters['setting/language']) {
        case 'en':
          return en
        case 'zh-cn':
          return zhCn
      }
    })
    return {
      localLanguage
    }
  },
  mounted () {
    // 监听窗口变化，更新窗口宽高
    window.onresize = () => {
      return (() => {
        this.setWindowInfo({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        })
      })()
    }
  },
  methods: {
    ...mapMutations(['setWindowInfo'])
  }
})
</script>
