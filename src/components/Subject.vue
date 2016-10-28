<template>
  <div class="subject">
<h1>{{ msg }}</h1>
<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
  </div>

</template>

<script>
export default {
  name: 'subject',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value1: 4
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 26px;
  text-align: center;
}
</style>
