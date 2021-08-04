<template>
  <div
    class="layout-logo"
    @click="$linkTo('/home')"
  >
    <!--    <img src="/assets/logo.png">-->
    <div class="img">
      {{ $t('message.hello') }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutLogo'
})
</script>

<style scoped lang="scss">
  .layout-logo {
    width: 100%;
    height: $layout-header-height;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 25px;
    border-bottom: 1px solid #ECEFF8;
    border-right: 1px solid #ECEFF8;
    background-color: #FFFFFF;
    img {
      font-size: 20px;
    }
  }
</style>
