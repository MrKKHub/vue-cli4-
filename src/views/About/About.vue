<template>
  <div class='view'>
    <div>{{$store.state.personal.count}}</div>
    <Button  type="primary" @click="increment">自增</Button>
    </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    Button
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    increment () {
      this.$store.commit('personal/increment', 1)
    }
  },
  create () {},
  mounted () {}
}
</script>

<style lang='less' scoped>

</style>
