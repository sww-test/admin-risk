<template>
  <span>
    <svg
      class="svg-icon"
      aria-hidden="true"
      :style="svgStyle"
    >
      <use
        :xlink:href="symbolId"
        :fill="color"
      />
    </svg>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#333'
    },
    width: {
      type: [String, Number],
      default: 12
    },
    height: {
      type: [String, Number],
      default: 12
    },
    top: {
      type: [String, Number],
      default: 0
    }
  },
  setup (props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    const svgStyle = computed(() => {
      return `width: ${props.width}px;height: ${props.height}px;top: ${props.top}px;`
    })
    return { symbolId, svgStyle }
  }
})
</script>
<style scoped lang="scss">
.svg-icon {
  vertical-align: -0.15em;
  overflow: hidden;
  display: inline-block;
  position: relative;
}
</style>
