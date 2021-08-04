<template>
  <router-view
    v-slot="{ Component }"
    style="height: 100%"
  >
    <keep-alive>
      <component
        :is="Component"
        v-if="!$route.meta.noKeepAlive"
        :key="componentKey"
      />
    </keep-alive>
    <component
      :is="Component"
      v-if="!!$route.meta.noKeepAlive"
      :key="componentKey"
    />
  </router-view>
</template>

<script lang="ts">
import { keepAliveMaxNum } from '@/config/setting.config'
import { defineComponent } from 'vue'
type keyType = string | number | undefined

export default defineComponent({
  name: 'AppKeepAlive',
  data () {
    return {
      keepAliveMaxNum: keepAliveMaxNum
    }
  },
  computed: {
    componentKey (): keyType {
      return this.$route.name as keyType
    }
  }
})
</script>
