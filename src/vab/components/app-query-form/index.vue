<template>
  <el-row
    :gutter="0"
    class="app-query-form"
  >
    <slot />
  </el-row>
</template>

<script>
export default {
  name: 'AppQueryForm'
}
</script>

<style scoped lang="scss">
  .app-query-form {
    :deep(.el-form-item) {
      margin-right: 40px;
    }
    :deep(.el-button) {
      min-width: 118px;
      height: 42px;
    }
    :deep(.el-button + .el-button) {
      margin-left: 20px;
    }
    :deep(.el-select) {
      width: 162px;
    }
    :deep(.el-range-editor.el-input__inner) {
      width: 260px;
    }
    :deep(.el-date-editor .el-range__icon) {
      display: none;
    }
    :deep(.el-date-editor .el-range-input) {
      width: 100px;
    }
    :deep(.el-date-editor .el-range-separator) {
      width: auto;
    }
  }
</style>
