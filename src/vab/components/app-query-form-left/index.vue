<template>
  <el-col
    :span="span"
    class="app-query-form__left"
    :style="{ flexWrap: canWrap ? 'wrap' : 'noWrap' }"
  >
    <slot />
  </el-col>
</template>

<script>
export default {
  name: 'AppQueryFormLeft',
  props: {
    span: {
      type: Number,
      default: 14
    },
    canWrap: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .app-query-form__left {
    display: flex;
    justify-content: flex-start;
  }
</style>
