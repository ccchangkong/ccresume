<template>
  <div id="app">
      <sidebar :sResume="resume" :sAvatar='avatar' @sAdd="add" @sDel='del' @sClear='clear' @changePic='change' @sCc='cc'></sidebar>
      <subject :sResume="resume" @sAdd="add" @sDel='del'></subject>
  </div>
</template>

<script>
import CC from "./js/base.js";
import Sidebar from "./components/Sidebar";
import Subject from "./components/Subject";
export default {
  name: "app",
  data() {
    return {
      resume: JSON.parse(window.localStorage.getItem("resume")) || CC,
      avatar: JSON.parse(window.localStorage.getItem("avatar")) || ""
    };
  },
  components: {
    Sidebar,
    Subject
  },
  methods: {
    add(vl, type, index, types) {
      let vls = {};
      for (let i in vl) {
        vls[i] = vl[i];
        vl[i] = "";
      }
      if (arguments.length === 2) {
        this.resume[type].push(vls);
      } else {
        this.resume[type][index][types].push(vls);
      }
    },
    del(vl, type, index, types) {
      if (arguments.length === 2) {
        this.resume[type].splice(vl, 1);
      } else {
        this.resume[type][index][types].splice(vl, 1);
      }
    },
    clear() {
      // window.alert(this.resume['exp'][0]['exp'][0].exps)
      window.localStorage.removeItem("resume");
      window.localStorage.removeItem("avatar");
      this.reset();
    },
    change(vl) {
      this.avatar = vl;
    },
    reset() {
      this.resume = {
        core: [
          { name: "姓名", value: "" },
          { name: "职业", value: "" },
          { name: "电话", value: "" },
          { name: "简介", value: "" }
        ],
        skils: [
          { name: "skilname", skil: 10 },
          { name: "skilname", skil: 22 },
          { name: "skilname", skil: 30 }
        ],
        exp: [
          {
            name: "教育经历",
            exp: [
              { startTime: "", endTime: "", company: "", job: "", exps: "" }
            ]
          },
          {
            name: "工作经历",
            exp: [
              { startTime: "", endTime: "", company: "", job: "", exps: "" }
            ]
          },
          {
            name: "项目经历",
            exp: [
              { startTime: "", endTime: "", company: "", job: "", exps: "" }
            ]
          }
        ],
        custom: [{ name: "自我评价", exps: "" }]
      };
      this.avatar = "";
    },
    cc() {
      this.resume = CC;
    }
  },
  watch: {
    resume: {
      handler: function(resume) {
        window.localStorage.setItem("resume", window.JSON.stringify(resume));
      },
      deep: true
    },
    avatar: {
      handler: function(avatar) {
        window.localStorage.setItem("avatar", window.JSON.stringify(avatar));
      }
    }
  }
};
</script>

<style>
#app {
  margin: auto;
  box-shadow: 0 0 5px #333;
  display: flex;
  width: 100%;
  min-width: 375px;
  flex-direction: column;
}
#app .sidebar {
  width: 100%;
}
#app .subject {
  width: 100%;
  padding: 0;
}
#app .mu-slider-thumb {
  background-color: #fff;
  color: #fff;
}
#app .mu-slider-fill {
  background-color: #fff;
}
body {
  padding-left: calc(100vw - 100%);
}
@media screen and (min-width: 375px) {
  html {
    /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
    font-size: calc(100% + 2 * (100vw - 375px) / 39);
    font-size: calc(16px + 2 * (100vw - 375px) / 39);
  }
}
@media screen and (min-width: 414px) {
  html {
    /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
    font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
    font-size: calc(18px + 4 * (100vw - 414px) / 586);
  }
}
@media screen and (min-width: 600px) {
  html {
    /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
    font-size: calc(125% + 4 * (100vw - 600px) / 400);
    font-size: calc(20px + 4 * (100vw - 600px) / 400);
  }
  #app {
    flex-direction: row;
  }
  #app .sidebar {
    width: 35%;
  }
  #app .subject {
    width: 65%;
  }
  #app .avatar {
    width: 10em;
    height: 10em;
  }
}
@media screen and (min-width: 1000px) {
  html {
    /* 1000px往后是每100像素0.5px增加 */
    font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
    font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
  }
  #app {
    width: 1000px;
  }
  #app .subject {
    width: 75%;
    padding: 1.5em 2em;
  }
  #app .avatar {
    width: 13em;
    height: 13em;
  }
}
@media screen and (min-width: 1200px) {
  #app {
    width: 1200px;
  }
}
</style>


