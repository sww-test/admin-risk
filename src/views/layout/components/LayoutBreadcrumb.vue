<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="item.url"
        :to="{ path: item.url }"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <button
      v-if="showHistory"
      class="go-back"
      @click="$router.go(-1)"
    >
      <span>返回</span>
      <app-icon
        name="back"
        width="18"
        height="18"
        top="1"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LayoutBreadcrumb',
  computed: {
    breadcrumbList () {
      // 获取所以已注册路由
      const routes = this.$router.getRoutes()
      // 获取当前路由，并且以/进行分割为数组
      const currentRoute = this.$route.path.split('/').filter(name => !!name)
      // 逐步拼接当前路由，检测每节是否存在title
      return currentRoute.reduce((result, item) => {
        result.url += `/${item}`
        const routeItem = routes.find(route => route.path === result.url)
        if (routeItem && routeItem.meta && routeItem.meta.title) {
          result.list.push({
            title: routeItem.meta.title,
            url: result.url
          })
        }
        return result
      }, {
        url: '',
        list: []
      }).list
    },
    showHistory () {
      return this.$route.path.includes('/history')
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.el-breadcrumb) {
  display: flex;
  align-items: baseline;
  position: relative;
  z-index: 101;

  .el-breadcrumb__item {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    .el-breadcrumb__inner {
      color: #210054;

      &:hover {
        color: #2C6BBA;
      }
    }

    &:last-child {
      font-size: 26px;
      font-weight: 600;
      color: #210054;

      .el-breadcrumb__inner {
        color: #210054;

        &:hover {
          color: #210054;
        }
      }
    }
  }
}

.layout-breadcrumb {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  .go-back {
    width: 98px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid #03238C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 20px;

    font-size: 16px;
    font-weight: 400;
    color: #03238C;
    line-height: 22px;

    position: relative;
    z-index: 103;

    margin-left: 26px;
  }
}
</style>
