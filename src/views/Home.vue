<template>
  <div class="home">
    <Button type="info" @click='getLogin'>信息按钮</Button>
    <div class="tip">点击按钮获取到的信息是: {{msg}}</div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
    Button
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getLogin () {
      this.$http.login().then(res => {
        console.log(res)
        this.msg = res
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tip{ margin-top: 20px;}
</style>
