<template>
  <el-col
    :span="span"
    class="app-query-form__right"
    :style="{ flexWrap: canWrap ? 'wrap' : 'no-wrap' }"
  >
    <slot />
  </el-col>
</template>

<script>
export default {
  name: 'AppQueryFormRight',
  props: {
    span: {
      type: Number,
      default: 10
    },
    canWrap: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .app-query-form__right {
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
  }
</style>
