<template>
  <el-container class="layout-box">
    <el-aside
      :width="asideMenuWidth + 'px'"
      class="layout-aside"
    >
      <layout-logo />
      <div class="layout-aside__menu">
        <layout-aside />
      </div>
    </el-aside>
    <el-container class="layout-right">
      <el-header height="82px">
        <layout-header />
      </el-header>
      <el-main class="layout-main">
        <div class="layout-main__breadcrumb">
          <layout-breadcrumb />
        </div>
        <!--        <el-scrollbar class="layout-main__content">-->
        <!--          <app-keep-alive />-->
        <!--        </el-scrollbar>-->
        <div class="layout-main__content">
          <div class="layout-main__content-inset">
            <app-keep-alive />
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutLogo from '@/views/layout/components/LayoutLogo.vue'
import LayoutAside from '@/views/layout/components/LayoutAside.vue'
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutBreadcrumb from '@/views/layout/components/LayoutBreadcrumb.vue'

import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutBreadcrumb,
    LayoutLogo
  },
  computed: {
    ...mapGetters(['layoutMainInfo']),
    ...mapGetters('layout', ['asideMenuWidth'])
  }
})
</script>

<style scoped lang="scss">
.layout-box {
  width: 100vw;
  height: 100vh;
  background-color: $base-bg-color;
  .layout-aside {
    display: flex;
    flex-direction: column;
    transition: width 0.3s;
    &__menu {
      flex: 1;
      overflow: hidden;
    }
  }
  .layout-right {
    position: relative;
  }
  .layout-main {
    position: relative;
    &__breadcrumb {
      width: 100%;
      height: $layout-breadcrumb-height;
    }
    &__content {
      width: 100%;
      height: 100%;
      padding: $layout-breadcrumb-height 24px 16px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      &-inset {
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        border-radius: 10px;
      }
    }
  }
}
</style>
