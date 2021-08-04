<template>
  <div class="app-pagination">
    <el-pagination
      :page-size="params.pageSize"
      :current-page="params.page"
      layout="slot, prev, pager, next, total"
      :hide-on-single-page="false"
      :total="params.total"
      @current-change="currentChange"
    >
      <button
        class="btn-prev app-pagination__first"
        @click="goFirst"
      >
        <i />
      </button>
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppPagination',
  inject: ['dataListParams', 'updatePageParams'],
  computed: {
    params () {
      // @ts-ignore
      return this.dataListParams.value
    }
  },
  methods: {
    currentChange (page: number): void {
      if (!this.params.loading) {
        // @ts-ignore
        this.updatePageParams({
          ...this.params,
          page
        })
        this.$emit('change', page)
      }
    },
    goFirst (): void {
      if (this.params.page !== 1) {
        this.currentChange(1)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.app-pagination {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 0 24px 20px;
  z-index: 103;
}
:deep(.el-pagination) {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .el-icon-arrow-right:before {
    content: '后一页';
  }

  .el-icon-arrow-left:before {
    content: '前一页'
  }

  .btn-prev,
  .btn-next {
    font-size: 12px;
    font-weight: 400;
    color: #636E95;
  }

  .el-pager {
    display: flex;
    align-items: center;
  }

  .el-pagination__total {
    font-size: 12px;
    font-weight: 400;
    color: #97A0C3;
    margin-left: 30px;
  }

  .el-pager li {
    font-size: 12px;
    font-weight: 400;
    color: #A1A9C9;
    min-width: 28px;
    height: 20px;
    line-height: 20px;
  }

  .el-pager li.active {
    background: #03238C;
    border-radius: 4px;
    font-weight: 500;
    color: #FFFFFF;
  }

  .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
    line-height: 28px;
    height: 28px;
  }
}
.app-pagination__first {
  margin-right: 7px!important;
  padding-right: 14px!important;
  position: relative;
  &::before {
    content: '首页';
    font-weight: bold;
  }
  &::after {
    content: '';
    width: 1px;
    height: 16px;
    border-right: 1px solid #BFC7E0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
