<template />

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState('router', ['roleType'])
  },
  mounted () {
    this.$router.replace({
      path: `/${this.roleType}`
    })
  }
})
</script>
