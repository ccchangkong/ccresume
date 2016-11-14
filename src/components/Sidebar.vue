<template>
  <div class="sidebar" id="sidebar">
    <img src="../img/avatar.jpg" alt="" class="avatar" :plain="true" @click="open('点我也没啥用啦')">
    <div class="s-core">
      <el-input placeholder="请输入内容" v-model="cdate.name">
        <template slot="prepend">姓名</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="cdate.offer">
        <template slot="prepend">职务</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="cdate.link">
        <template slot="prepend">联系方式</template>
      </el-input>
    </div>
    <div class="s-skils">
      <div class="s-skils-box">
        <el-input placeholder="技能1" class='s-skils-title'></el-input>
        <el-rate v-model="cdate.skils.js" class='s-skils-rate'></el-rate>
      </div>
      <div class="s-skils-box">
        <el-input placeholder="技能2" class='s-skils-title'></el-input>
        <el-rate v-model="cdate.skils.html" class='s-skils-rate'></el-rate>
      </div>
      <div class="s-skils-box">
        <el-input placeholder="技能3" class='s-skils-title'></el-input>
        <el-rate v-model="cdate.skils.css" class='s-skils-rate'></el-rate>
      </div>
      <el-button style="float: right;" type="primary" icon="plus">添加</el-button>
    </div>
    <i class="el-icon-setting s-set" @click="open('设置什么呢')"></i>
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
<style>
  .sidebar{
    width: 25%;
    min-height: 100vh;
    background-color: #1D8CE0;
    color: #fff;
    vertical-align: top;
    transition: .5s;
    position: relative;
    padding: 20px;
    box-sizing:border-box;

  }
  .sidebar:hover{
    background-color: #20A0FF;

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
.s-skils{
  /*margin-bottom: 50px;*/
}
.s-skils-title{
  display: inline-block;
  width: 80px;
}
.s-skils-rate{
  display: inline-block;
}
.s-set{
  position: absolute;
  bottom: 80px;
  left: 50px;
}
</style>
