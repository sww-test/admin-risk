<template>
  <div class="layout-header">
    <div class="layout-header__option">
      <span
        class="layout-header__option-btn layout-header__option-left"
        @click="setShowAsideMenu"
      >
        <app-icon
          :name="`menu-${showAsideMenu ? '' : 'un'}fold-line`"
          width="20"
          height="20"
        />
      </span>
      <span
        class="layout-header__option-btn"
        @click="fullScreenClick"
      >
        <app-icon
          :name="isFullscreen ? 'fullscreen-exit-line' : 'fullscreen-line'"
          width="20"
          height="20"
        />
      </span>
      <el-dropdown
        size="small"
        @command="languageChange"
      >
        <span
          class="layout-header__option-btn"
          @click="refreshRoute"
        >
          <app-icon
            name="translate"
            width="20"
            height="20"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh-cn">
              中文简体
            </el-dropdown-item>
            <el-dropdown-item command="en">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span
        class="layout-header__option-btn"
        @click="refreshRoute"
      >
        <app-icon
          name="refresh-line"
          width="20"
          height="20"
        />
      </span>
    </div>
    <div class="layout-header__info">
      <div class="layout-header__info-avatar">
        <el-avatar
          :size="42"
          :src="userInfo.avatar"
        ></el-avatar>
      </div>
      <div class="layout-header__info-name">
        {{ userInfo.userName }}
      </div>
      <el-popconfirm
        title="立即退出"
        confirm-button-text="好的"
        cancel-button-text="不用了"
        @confirm="onLogout"
      >
        <template #reference>
          <button
            class="layout-header__info-logout flex justify-center items-center"
          >
            <span>登出</span>
          </button>
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'
import { defineComponent } from 'vue'
import screenfull from 'screenfull'

export default defineComponent({
  name: 'LayoutHeader',
  data () {
    return {
      isFullscreen: false
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapState('layout', ['showAsideMenu'])
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapMutations('layout', ['setShowAsideMenu']),
    ...mapMutations('setting', ['setLanguage']),
    ...mapActions('user', ['logout']),
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    // 全屏
    fullScreenClick () {
      if (!screenfull.isEnabled) {
        this.$message.error('开启全屏失败')
        return false
      }
      screenfull.toggle()
    },
    // 退出登录
    async onLogout () {
      await this.logout()
      location.reload()
    },
    // 刷新页面
    refreshRoute () {
      location.reload()
    },
    languageChange (type) {
      this.setLanguage(type)
      this.$i18n.locale = type
    }
  }
})
</script>

<style scoped lang="scss">
.layout-header {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding-right: 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ECEFF8;

  &__option {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-btn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      cursor: pointer;
      line-height: 1;
    }
    &-left {
      margin-right: auto;
      margin-left: 16px;
    }
  }

  &__info {
    display: flex;
    align-items: center;

    &-name {
      font-size: 18px;
      font-weight: 600;
      color: #242F57;
      margin: 0 19px 0 11px;
    }

    &-logout {
      width: 56px;
      height: 26px;
      border-radius: 4px;
      border: 1px solid #DCE9F7;
      font-size: 16px;
      font-weight: 400;
      color: #FE729F;
      line-height: 22px;
    }
  }
}
</style>
