<template>
  <div class="subject">
    <h1>{{ msg }}</h1>
    <div class="block">
      <p @click="onInput">{{valuess}}</p>
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="valuess"></el-rate>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subject',
  props: ['valuess'],
  methods: {
    onInput: function () {
      this.$emit('onInput')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .subject{
    display: inline-block;
    width: 75%;   
    min-height: 700px; 
    height: 100vh;       
    background-color: #ddd;  

    color: #333;
    transition: .5s;
  }
  .subject:hover{
    background-color: #eee;  
    
  }
h1{
  font-size: 26px;
  text-align: center;
}
</style>
