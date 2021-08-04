<template>
  <el-scrollbar
    height="100%"
    wrap-style="background-color: #ffffff;"
  >
    <el-menu
      mode="vertical"
      :default-active="$route.meta.fullPath"
      router
    >
      <layout-menu
        :menu-list="handleRoutes"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutMenu from '@/views/layout/components/LayoutMenu.vue'
import { mapState } from 'vuex'

export default defineComponent({
  components: {
    LayoutMenu
  },
  computed: {
    ...mapState('router', ['routes']),
    handleRoutes () {
      // @ts-ignore
      return this.routes.children
    }
  },
  methods: {
    menuOpen (index: any): void {
      if (!this.$route.path.includes(index)) {
        this.$router.push(index)
      }
    }
  }
})
</script>

<style scoped lang="scss">
:deep(.el-scrollbar__wrap) {
  box-sizing: border-box;
  padding-top: 14px;
}
:deep(.el-menu) {
  width: 218px;
  border-right: none;

  .el-submenu__title {
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    position: relative;
    color: #03238C;

    &::after {
      content: ' ';
      width: 4px;
      height: 0;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 50%;
      transition: height 0.3s;
      transform: translate(0, -50%);
    }

    i {
      display: none;
    }
  }

  .el-menu-item {
    box-sizing: border-box;
    color: #97A0C3;
    vertical-align: baseline;
    font-size: 16px;
    line-height: 22px;
    padding: 14px 10px 14px 64px!important;
    display: flex;
    align-items: center;
    white-space: normal;
    height: auto;
    svg {
      //font-size: 24px;
      margin-right: 4px;
      color: #97A0C3;
      use {
        fill: #97A0C3;
      }
    }
    span {
      position: relative;
      top: 2px;
    }

    &:hover,
    &:active,
    &:focus {
      background-color: inherit!important;
    }
  }
}
:deep(.is-active) {
  .el-submenu__title {
    background: #F4FAFF;
    border-radius: 0 10px 10px 0;
    font-weight: 500;

    &::after {
      background-color: #03238C;
      height: 100%;
    }
  }
}
:deep(.el-submenu__title:hover) {
  background: #F4FAFF;
  border-radius: 0 10px 10px 0;
  font-weight: 500;
  color: #03238C;

  &::after {
    background-color: #03238C;
    height: 100%;
  }
}
:deep(.el-menu-item.is-active,.el-menu-item:hover) {
  color: #242F57;
  svg {
    use {
      fill: #03238C;
    }
  }
}
</style>
