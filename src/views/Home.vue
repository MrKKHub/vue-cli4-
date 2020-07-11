<template>
  <div class="home">
    <Button type="info" @click='getLogin'>信息按钮</Button>
    <div class="tip">点击按钮获取到的信息是: {{msg}}</div>
    <input type="text" placeholder="会自动聚焦到这来" v-focus @input="changeValue">
    <div class="less-mode">less的样式</div>
    <div class="sing">我是单行文本超出省略的内容你看是不是</div>
    <div class="multi">我是多行文本超出省略的内容你看是不是</div>
    <div>{{$common.formatDate(time)}}</div>
    <Button type="gray" @click='goToPage'>去其他页</Button>
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
      msg: '',
      time: 1594454826669
    }
  },
  methods: {
    getLogin () {
      this.$http.login().then(res => {
        console.log(res)
        this.msg = res
      })
    },
    goToPage () {
      this.$router.push('/personal')
    },
    add (num) {
      console.log('------num', num)
    },
    changeValue () {
      this.$common.debounce(this.add, 2000, 1)
    }
  },
  updated () {
    console.log('走了updated方法')
  }
}
</script>

<style lang="less" scoped>
.tip{ margin-top: 20px;}
.less-mode{ width: 100px;height: 100px;background-color: @bg-color;color: @main-color;.flex()}
.sing{ width: 200px; .singLineHidden() }
.multi{ width: 100px; .multiLineHidden();margin-top: 30px; }
</style>
