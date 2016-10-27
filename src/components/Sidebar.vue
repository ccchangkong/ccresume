<template>
  <div class="sidebar">
  <img src="../img/avatar.jpg" alt="" class="avatar">  
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
	font-size: 14px;
	text-align: center;
}
.avatar{
	border-radius: 50%;
	display: block;
	margin: 20px auto;
	transition: .5s;
}
.avatar:hover{
	box-shadow: 0 0 15px #fff;
}
</style>
