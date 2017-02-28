<template>
  <div class="sidebar" id="sidebar">
    <div ref="pic" @mouseenter="handleHover('pic')" @mouseleave="handleHoverExit('pic')" style='position: relative;display: inline-block;width: 100%;'>
      <img :src="sAvatar" alt="" class="avatar" @click="open('dialogPic')">
      <mu-tooltip label="点击可替换图片" touch :show="show.pic" :trigger="trigger.pic" id='d-img' />
    </div>
    <div class="s-core" v-for="item in sCore">
      <mu-text-field :label="item.name" labelFloat v-model='item.value' />
    </div>
    <div class="s-skils" v-for="(item, index) in sSkils">
      <div class="s-skils-box">
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="50">
            <mu-text-field v-model='item.name'/>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="50" style='text-align: end;'>
            <p class="s-skils-dot">{{item.skil}}/100</p>
          </mu-col>
        </mu-row>
        <mu-slider v-model="item.skil" :step="5" class="" />
        <mu-icon-button icon="delete" @click="sDel(index,'skils')" />
      </div>
    </div>
    <div v-show="showBtn" class="s-box-btn">
      <div ref="add" class="s-box-btns" @mouseenter="handleHover('add')" @mouseleave="handleHoverExit('add')">
        <mu-float-button icon="add" mini class="demo-float-button" @click="open('dialogSkil')" />
        <mu-tooltip label="添加技能" touch :show="show.add" :trigger="trigger.add" />
      </div>
      <div ref="photo" class="s-box-btns" @mouseenter="handleHover('photo')" @mouseleave="handleHoverExit('photo')">
        <mu-float-button icon="add_a_photo" mini @click="photo" />
        <mu-tooltip label="生成图片" touch :show="show.photo" :trigger="trigger.photo" />
      </div>
      <div ref="cc" class="s-box-btns" @mouseenter="handleHover('cc')" @mouseleave="handleHoverExit('cc')">
        <mu-float-button icon="closed_caption" mini @click="sCc()" />
        <mu-tooltip label="cc长空" touch :show="show.cc" :trigger="trigger.cc" />
      </div>
      <div ref="reset" class="s-box-btns" @mouseenter="handleHover('reset')" @mouseleave="handleHoverExit('reset')">
        <mu-float-button icon="delete_forever" mini @click="sClear()" secondary/>
        <mu-tooltip label="重置" touch :show="show.reset" :trigger="trigger.reset" />
      </div>
    </div>
    <mu-dialog :open="dialogSkil" title="添加技能" @close="close('dialogSkil')">
      <mu-text-field label="name" labelFloat v-model='addValue.name' />
      <mu-text-field label="skils" labelFloat v-model='addValue.skil' />
      <mu-flat-button slot="actions" @click="close('dialogSkil')" primary label="取消" />
      <mu-flat-button slot="actions" keyboardFocused primary @click="sAdd(addValue, 'skils', 'dialogSkil')" label="确定" />
    </mu-dialog>
    <mu-dialog :open="dialogPic" title="替换头像" @close="close('dialogPic')">
      <mu-flat-button slot="actions" @click="close('dialogPic')" primary label="取消" />
      <input type="file" id='upPic' accept="image/png,image/jpeg,image/webP">
      <p>3MB以下的png、jpg、jpeg或webp图片，建议使用方形图片</p>
      <mu-flat-button slot="actions" label="确定" @click="changePic('dialogPic')" />
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
      sho: true,
      dialogSkil: false,
      dialogPic: false,
      addValue: {
        name: '',
        skil: 60
      },
      showBtn: true,
      show: {
        reset: false,
        add: false,
        photo: false,
        pic: false,
        cc: false
      },
      trigger: {
        reset: null,
        add: null,
        photo: null,
        pic: null,
        cc: null
      }
    }
  },
  mounted () {
    this.trigger.reset = this.$refs.reset
    this.trigger.add = this.$refs.add
    this.trigger.photo = this.$refs.photo
    this.trigger.pic = this.$refs.pic
    this.trigger.cc = this.$refs.cc
  },
  methods: {
    changePic (dl) {
      this.close(dl)
      let self = this
      let file = document.getElementById('upPic').files[0]
      if (file.size < 3145728) {
        let imgFile = new window.FileReader()
        imgFile.readAsDataURL(file)
        imgFile.onload = function () {
          let imgData = imgFile.result
          self.$emit('changePic', imgData)
        }
      } else {
        window.alert('big')
      }
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
    sCc () {
      this.$emit('sCc')
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
      this.showBtn = false
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      // var myList = document.querySelectorAll('.mu-tooltip')
      // Array.prototype.forEach.call(myList, function (div) {
      //   div.style.display = 'none'
      // })
      this.$nextTick(function () {
        Html2canvas(document.getElementById('app'))
        .then(function (canvas) {
          self.spic = canvas.toDataURL()
        })
        .then(function () {
          document.getElementById('dw').click()
          self.showBtn = true
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sidebar {
  width: 25%;
  min-height: 100vh;
  color: #fff;
  vertical-align: top;
  transition: .5s;
  padding: 30px;
  background-color: #03a9f4;
  background-image: linear-gradient(-45deg, #4fc3f7, #03a9f4);
  background-size: 100% 200%;
  background-position: 0 50%;
}

.sidebar:hover {
  background-color: #29b6f6;
  background-position: 0 100%;
}

.sidebar:hover .s-box-btn {
  opacity: 1;
}

.sidebar .s-box-btn {
  opacity: 0;
  transition: .5s;
}

.s-box-btns {
  position: relative;
  display: inline-block;
  margin-right: 1em;
}

.avatar {
  border-radius: 100%;
  display: block;
  margin: auto;
  box-shadow: 0 0 5px #ddd;
  transition: .5s;
  overflow: hidden;
  width: 13em;
  height: 13em;
  background-color: #fff;
  background-image: linear-gradient(45deg, #fdfdfd, #57afef);
  background-size: 100% 200%;
  background-position: 0 50%;
}

.avatar:hover {
  box-shadow: 0 0 15px #fff;
  background-position: 0 100%;
}

#dw {
  display: none;
}

.s-core .mu-text-field-input {
  text-indent: 2em;
}

.s-skils-box:hover .mu-icon-button {
  display: block;
}

.s-skils-box .mu-icon-button {
  display: none;
  position: absolute;
  left: -38px;
  top: 2px;
}

.sidebar .mu-text-field-focus-line {
  background-color: #fff;
}

.sidebar .mu-text-field-label {
  color: rgba(256, 256, 256, .9);
}

/*.s-skils-box {
  position: relative;
}*/

.s-skils-dot {
display: inline-block;
}

</style>

