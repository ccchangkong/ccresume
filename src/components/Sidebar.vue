<template>
  <div class="sidebar" id="sidebar">
    <div style='position: relative;display: inline-block;width: 100%;'>
      <v-tooltip>
        <img slot="activator" :src="sAvatar" alt="" class="avatar" @click="open('dialogPic')"> 点击可替换图片
      </v-tooltip>
    </div>
    <div class="s-core" v-for="item in sCore" :key="item.index">
      <v-text-field :label="item.name" :value="item.value"></v-text-field>
    </div>
    <div class="s-skils" v-for="(item, index) in sSkils" :key="item.index">
      <div class="s-skils-box">
        <v-text-field :value="item.name"></v-text-field>
        <p class="s-skils-dot">{{item.skil}}/100</p>

        <v-slider v-model="item.skil" :step="5" class=""></v-slider>

        <v-icon @click.native="sDel(index,'skils')">delete</v-icon>
      </div>
    </div>

    <div v-show="showBtn" class="s-box-btn">
      <div class="s-box-btns">
        <v-tooltip>
          <v-btn slot="activator" fab dark small @click="open('dialogSkil')">
            <v-icon>add</v-icon>
          </v-btn>
          添加技能
        </v-tooltip>
      </div>
      <div class="s-box-btns">
        <v-tooltip>
          <v-btn slot="activator" fab dark small @click="photo">
            <v-icon>add_a_photo</v-icon>
          </v-btn>
          添加技能
        </v-tooltip>
      </div>
      <div class="s-box-btns">
        <v-tooltip>
          <v-btn slot="activator" fab dark small @click="sCc()">
            <v-icon>closed_caption</v-icon>
          </v-btn>
          cc长空
        </v-tooltip>
      </div>
      <div class="s-box-btns">
        <v-tooltip>
          <v-btn slot="activator" fab dark small color="pink" @click="sClear()">
            <v-icon>delete_forever</v-icon>
          </v-btn>
          重置
        </v-tooltip>
      </div>
    </div>

    <v-dialog v-model="dialogSkil">
      <v-card>
        <v-card-title>添加技能</v-card-title>

        <v-card-text>
          <v-text-field label="name" :value="addValue.name"></v-text-field>
          <v-text-field label="skils" :value="addValue.skil"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn color="error" @click="close('dialogSkil')">取消</v-btn>
          <v-btn color="primary" @click="sAdd(addValue, 'skils', 'dialogSkil')">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogPic">
      <v-card>
        <v-card-title>替换头像</v-card-title>
        <v-card-text>
          <input type="file" id='upPic' accept="image/png,image/jpeg,image/webP">
          <p>3MB以下的png、jpg、jpeg或webp图片，建议使用方形图片</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="error" @click="close('dialogPic')">取消</v-btn>
          <v-btn color="primary" @click="changePic('dialogPic')">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <a :href="spic" id="dw" download="my.png"></a>
  </div>
</template>






<script>
import Html2canvas from "html2canvas";
export default {
  name: "sidebar",
  props: ["sResume", "sAvatar"],
  data() {
    return {
      spic: "",
      sho: true,
      dialogSkil: false,
      dialogPic: false,
      addValue: {
        name: "",
        skil: 60
      },
      showBtn: true,
      sCore:this.sResume.core,
       sSkils:this.sResume.skils
    };
  },
 computed: {
  //  sCore(){
  //    return this.sResume.core
  //  },
  //     sSkils(){
  //    return this.sResume.skils
  //  }
 },
  methods: {
    changePic(dl) {
      this.close(dl);
      let self = this;
      let file = document.getElementById("upPic").files[0];
      if (file.size < 3145728) {
        let imgFile = new window.FileReader();
        imgFile.readAsDataURL(file);
        imgFile.onload = function() {
          let imgData = imgFile.result;
          self.$emit("changePic", imgData);
        };
      } else {
        window.alert("big");
      }
    },
    sAdd(vl, type, dl) {
      this.close(dl);
      this.$emit("sAdd", vl, type);
    },
    sDel(vl, type) {
      this.$emit("sDel", vl, type);
    },
    sClear() {
      this.$emit("sClear");
    },
    sCc() {
      this.$emit("sCc");
    },
    open(vl) {
      this[vl] = true;
    },
    close(vl) {
      this[vl] = false;
    },
    photo() {
      let self = this;
      this.showBtn = false;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      this.$nextTick(function() {
        Html2canvas(document.getElementById("app"))
          .then(function(canvas) {
            self.spic = canvas.toDataURL();
          })
          .then(function() {
            document.getElementById("dw").click();
            self.showBtn = true;
          });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sidebar {
  width: 25%;
  /* min-height: 100vh; */
  color: #fff;
  vertical-align: top;
  transition: 0.5s;
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
  transition: 0.5s;
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
  transition: 0.5s;
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

/* .s-core .v-text-field-input {
  text-indent: 2em;
}

.s-skils-box:hover .v-icon-button {
  display: block;
}

.s-skils-box .v-icon-button {
  display: none;
  position: absolute;
  left: -38px;
  top: 2px;
}

.sidebar .v-text-field-focus-line {
  background-color: #fff;
}

.sidebar .v-text-field-label {
  color: rgba(256, 256, 256, 0.9);
}

.s-skils-dot {
  display: inline-block;
} */
</style>

