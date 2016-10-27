<template>
  <div class="subject">
<h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'subject',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
