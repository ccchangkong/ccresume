<template>
  <div class="sidebar" id="sidebar">
    <img src="../img/avatar.jpg" alt="" class="avatar" :plain="true">
    
    <div class="s-core" v-for="item in sCore">
    <mu-text-field :label="item.name" labelFloat v-model='item.value'/>
    </div>
    <div class="s-skils" v-for="(item, index) in sSkils">
      <div class="s-skils-box">
      <mu-text-field  v-model='item.name'/>
      <mu-slider v-model="item.skil" :step="10" class=""/>
      <mu-icon-button icon="delete" @click="sDel(index,'skils')"/>  
      </div>
    </div>
   <mu-raised-button label="添加技能" @click="open"/>
    <mu-dialog v-if="dialog" title="添加技能" @close="close">
    <mu-text-field label="name" labelFloat v-model='addValue.name'/>
    <mu-text-field label="skils" labelFloat v-model='addValue.skil'/>
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" keyboardFocused primary @click="sAdd(addValue, 'skils')" label="确定"/>
  </mu-dialog>

    <div class="d-pic">
      <mu-float-button icon="add_a_photo" mini class=""label="生成图片" @click="photo()"/>
      <a :href="spic" id="dw" download="my.png"></a>
      <mu-float-button icon="settings" mini />
      <mu-float-button icon="delete_forever" mini @click="sClear()"/>
    </div>   
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
      dialog: false,
      addValue: {
        name: '',
        skil: ''
      }
    }
  },
  methods: {
    sAdd: function (vl, type) {
      this.dialog = false
      let vls = {}
      for (let i in vl) {
        vls[i] = vl[i]
        vl[i] = ''
      }
      this.$emit('sAdd', vls, type)
    },
    sDel: function (vl, type) {
      this.$emit('sDel', vl, type)
    },
    sClear: function () {
      this.$emit('sClear')
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
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
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
#dw{
  display: none;
}
</style>
