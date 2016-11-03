<template>
  <div class="sidebar" id="sidebar">
  <img src="../img/avatar.jpg" alt="" class="avatar" :plain="true" @click="open('点我也没啥用啦')"> 
  <el-input placeholder="请输入内容" v-model="cdate.name"><template slot="prepend">姓名</template></el-input> 
  <el-input placeholder="请输入内容" v-model="cdate.offer"><template slot="prepend">职务</template></el-input> 
  <el-input placeholder="请输入内容" v-model="cdate.link"><template slot="prepend">联系方式</template></el-input> 
  <el-rate v-model="cdate.skils.js"></el-rate>
  <el-rate v-model="cdate.skils.css"></el-rate>
  <el-rate v-model="cdate.skils.html"></el-rate>
    <i class="el-icon-setting"></i>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      // msg: '你的大名'
      cdate: {
        name: '你的大名',
        offer: '职务',
        link: '联系方式',
        skils: {
          js: 5,
          css: 5,
          html: 5
        }
      }
    }
  },
  methods: {
    open (msg) {
      this.$message({
        message: msg,
        duration: 1000
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar{
    display: inline-block;
    width: 25%; 
    min-height: 700px;
    background-color: #3090e0;  
    height: 100vh;    
    color: #fff;
    vertical-align: top;
    transition: .5s;
  }
  .sidebar:hover{
    background-color: #4da2fd;  

  }
  .avatar{
	 border-radius: 50%;
	 display: block;
	 margin: 20px auto;
   box-shadow: 0 0 5px #ddd; 
	 transition: .5s;
  }
  .avatar:hover{
	 box-shadow: 0 0 15px #fff;
	/*transform: scale(1.05);*/
}
.el-icon-setting{
  font-size: 26px;
  cursor: pointer;
  transition: .5s;
}
.el-icon-setting:hover{
  transform: rotate(180deg);
}
</style>
