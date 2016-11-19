<template>
  <div class="sidebar" id="sidebar">
<div ref="pic" @mouseenter="handleHover('pic')" @mouseleave="handleHoverExit('pic')" style='position: relative;display: inline-block;'>
 <!-- <img src="../img/avatar.jpg" alt="" class="avatar" @click="open('dialogPic')"> -->
     <img :src="sAvatar" alt="" class="avatar" @click="open('dialogPic')">
      <mu-tooltip label="点击可替换图片" touch :show="show.pic" :trigger="trigger.pic" id='d-img'/>
    </div>
    <div class="s-core" v-for="item in sCore">
      <mu-text-field :label="item.name" labelFloat v-model='item.value' />
    </div>
    <div class="s-skils" v-for="(item, index) in sSkils">
      <div class="s-skils-box">
        <mu-text-field v-model='item.name' />
        <mu-slider v-model="item.skil" :step="10" class=""/>
        <mu-icon-button icon="delete" @click="sDel(index,'skils')" />
      </div>
    </div>

    <div class="d-pic" v-show="picBox" id="d-pic">
    <div ref="add" @mouseenter="handleHover('add')" @mouseleave="handleHoverExit('add')" style='position: relative;display: inline-block;'>
      <mu-float-button icon="add" mini class="demo-float-button" @click="open('dialogSkil')" />
      <mu-tooltip label="添加技能" touch :show="show.add" :trigger="trigger.add" />
    </div>
      <div ref="photo" @mouseenter="handleHover('photo')" @mouseleave="handleHoverExit('photo')" style='position: relative;display: inline-block;'>
      <mu-float-button icon="add_a_photo" mini   @click="photo()" />
        <mu-tooltip label="生成图片" touch :show="show.photo" :trigger="trigger.photo" />
      </div>
      <mu-float-button icon="settings" mini />
<div ref="reset" @mouseenter="handleHover('reset')" @mouseleave="handleHoverExit('reset')" style='position: relative;display: inline-block;'>
        <mu-float-button icon="delete_forever" mini @click="sClear()" />
        <mu-tooltip label="重置" touch :show="show.reset" :trigger="trigger.reset" />

      </div>

    </div>

    <mu-dialog v-if="dialogSkil" title="添加技能" @close="close('dialogSkil')">
      <mu-text-field label="name" labelFloat v-model='addValue.name' />
      <mu-text-field label="skils" labelFloat v-model='addValue.skil' />
      <mu-flat-button slot="actions" @click="close('dialogSkil')" primary label="取消" />
      <mu-flat-button slot="actions" keyboardFocused primary @click="sAdd(addValue, 'skils', 'dialogSkil')" label="确定" />
    </mu-dialog>
    <mu-dialog v-if="dialogPic" title="替换头像" @close="close('dialogPic')">
      <mu-text-field label="图片地址" labelFloat v-model='src' fullWidth/>
      <mu-flat-button slot="actions" @click="close('dialogPic')" primary label="取消" />
      <mu-flat-button slot="actions" keyboardFocused primary label="确定" @click="changePic('dialogPic',src)" />
    </mu-dialog>
    <a :href="spic" id="dw" download="my.png"></a>
  </div>
</template>




<script>
import Html2canvas from 'html2canvas'
export default {
  name: 'sidebar',
  props: ['sCore', 'sSkils', 'sAvatar'],
  data () {
    return {
      spic: '',
      dialogSkil: false,
      dialogPic: false,
      addValue: {
        name: '',
        skil: ''
      },
      picBox: true,
      show: {
        reset: false,
        add: false,
        photo: false,
        pic: false
      },
      trigger: {
        reset: null,
        add: null,
        photo: null,
        pic: null
      }
    }
  },
  mounted () {
    this.trigger.reset = this.$refs.reset
    this.trigger.add = this.$refs.add
    this.trigger.photo = this.$refs.photo
    this.trigger.pic = this.$refs.pic
  },
  methods: {
    changePic (dl, vl) {
      this.close(dl)
      this.$emit('changePic', vl)
    },
    sAdd (vl, type, dl) {
      this.close(dl)
      this.$emit('sAdd', vl, type)
    },
    sDel (vl, type) {
      this.$emit('sDel', vl, type)
    },
    sClear () {
      this.$emit('sClear')
    },
    open (vl) {
      this[vl] = true
    },
    close (vl) {
      this[vl] = false
    },
    handleHover (vl) {
      this.show[vl] = true
    },
    handleHoverExit (vl) {
      this.show[vl] = false
    },
    photo () {
      let self = this
      // this.picBox = false
      document.body.scrollTop = 0
      document.getElementById('d-pic').style.display = 'none'
      document.getElementById('d-img').style.display = 'none'

      Html2canvas(document.getElementById('app'), {taintTest: false})
      .then(function (canvas) {
        self.spic = canvas.toDataURL()
      })
      .then(function () {
        document.getElementById('dw').click()
        document.getElementById('d-pic').style.display = 'block'
        document.getElementById('d-img').style.display = 'block'
      })
      // Html2canvas(document.getElementById('app'), {
      //   onrendered: function (canvas) {
      //     // self.picBox = false
      //     self.spic = canvas.toDataURL()
      //   }
      // })
      // .then(function () {
      //   document.getElementById('dw').click()
      //   // self.picBox = true
      //   document.getElementById('d-pic').style.display = 'block'
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .sidebar{
    width: 25%;
    min-height: 100vh;
    background-color: #03a9f4;

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
   overflow: hidden;
   width: 80%;
   min-width: 50px;
   max-width: 20em;

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
