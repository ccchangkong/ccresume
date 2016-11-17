<template>
  <div class="sidebar" id="sidebar">
    <img src="../img/avatar.jpg" alt="" class="avatar" :plain="true" @click="open('点我也没啥用啦')">
    <div class="s-core" v-for="item in sCore">
      <el-input placeholder="" v-model='item.value'>
        <template slot="prepend">{{item.name}}</template>
      </el-input>
    </div>
    <div class="s-skils" v-for="(item, index) in sSkils">
      <div class="s-skils-box">
        <el-input v-model="item.name" class='s-skils-title'></el-input>
        <el-rate v-model="item.skil" class='s-skils-rate'></el-rate>
        <el-button type="primary" @click="sDel(index,'skils')">删除</el-button>
      </div>
    </div>
    <el-input class='s-skils-title' v-model='addValue.name'></el-input>
    <el-input class='s-skils-title' v-model='addValue.skil'></el-input>
    <el-button type="primary" icon="plus" @click="sAdd(addValue, 'skils')">添加</el-button>
    <div class="d-pic">
      <el-button type="primary" icon="picture" @click="photo()">生成图片</el-button>
      <a :href="spic" id="dw" download="my.png">
        <el-button type="primary" icon="picture">下载图片</el-button>
      </a>
    </div>
    <i class="el-icon-delete" style="font-size: 26px;" @click="sClear()"></i>
    <i class="el-icon-setting s-set" @click="open('设置什么呢')"></i>
  </div>
</template>



<script>
import Html2canvas from 'html2canvas'
export default {
  name: 'sidebar',
  props: ['sCore', 'sSkils'],
  data () {
    return {
      spic: '',
      addValue: {
        name: '',
        skil: ''
      }
    }
  },
  methods: {
    sAdd: function (vl, type) {
      this.$emit('sAdd', { name: vl.name, skil: vl.skil }, type)
    },
    sDel: function (vl, type) {
      this.$emit('sDel', vl, type)
    },
    sClear: function () {
      this.$emit('sClear')
    },
    open (msg) {
      this.$message({
        message: msg,
        duration: 1000
      })
    },
    photo () {
      let self = this
      document.body.scrollTop = 0
      Html2canvas(document.getElementById('app')).then(function (canvas) {
        self.spic = canvas.toDataURL()
      })
      .then(function () {
        document.getElementById('dw').click()
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
    background-color: #20A0FF;
    color: #fff;
    vertical-align: top;
    transition: .5s;
    position: relative;
    padding: 20px;
    box-sizing:border-box;

  }
  .sidebar:hover{
    background-color: #1D8CE0;

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
.el-icon-picture{
  font-size: 20px;
}
#dw{
  display: none;
}
</style>
