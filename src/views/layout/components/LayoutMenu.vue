<template>
  <template
    v-for="item in handleMenu"
    :key="item.name"
  >
    <component
      :is="menuType(item)"
      :index="item.meta.fullPath"
    >
      <template #title>
        <div
          v-if="checkStatus(item.meta.realPath)"
          class="menu-status"
        >
          待补充
        </div>
        <app-icon
          v-if="item.meta.icon"
          :name="item.meta.icon"
          width="24"
          height="24"
        />
        <span>{{ item.meta.title }}</span>
      </template>
      <layout-menu
        v-if="item.children && item.children.length > 0"
        :menu-list="item.children"
      />
    </component>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElSubmenu, ElMenuItem } from 'element-plus'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'LayoutMenu',
  components: {
    ElMenuItem,
    ElSubmenu
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['menuStatus']),
    handleMenu (): any {
      return this.menuList.filter((item: any) => {
        return !item.meta.hidden
      })
    },
    menuType () {
      return (item: any) => {
        return item.children && item.children.some((child: any) => !child.meta.hidden)
          ? 'el-submenu'
          : 'el-menu-item'
      }
    },
    checkStatus () {
      return (path: string): boolean => {
        if (!this.menuStatus) return false
        switch (path) {
          case '/subsidiary/base/business':
            return !this.menuStatus.companyInfo
          case '/subsidiary/base/license':
            return !this.menuStatus.bizInfo
          case '/subsidiary/base/drugs':
            return !this.menuStatus.appInfo
          case '/subsidiary/base/appliance':
            return !this.menuStatus.internetInfo
          case '/subsidiary/base/second':
            return !this.menuStatus.medicine
          case '/subsidiary/base/internet':
            return !this.menuStatus.secondInfo
        }
        return false
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .menu-status {
    width: 72px;
    height: 27px;
    background: #F2A626;
    border-radius: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    line-height: 26px;
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translate(0, -50%) scale(0.7);
  }
</style>
