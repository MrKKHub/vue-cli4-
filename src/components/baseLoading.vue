<template>
  <div class='components'>
    <loading type="spinner" color="#1989fa" size='24' vertical class="load">加载中...</loading>
  </div>
</template>

<script>
import { Loading } from 'vant'
export default {
  components: {
    Loading
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {},
  create () {},
  mounted () {}
}
</script>

<style lang='less' scoped>
.components{ width: 100%;height: 100vh;background-color: rgba(255,255,255);position: fixed;top: 0;left: 0;z-index: 9999;display: flex;justify-content: center;align-items: center; }
</style>
