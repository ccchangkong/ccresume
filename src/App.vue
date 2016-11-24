<template>
  <div id="app">
        <sidebar :sCore="resume.core" :sSkils='resume.skils' :sAvatar='avatar' @sAdd="add" @sDel='del' @sClear='clear' @changePic='change' @sCc='cc'></sidebar>
        <subject :sExp='resume.exp' :sCustom='resume.custom' @sAdd="add" @sDel='del'></subject>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Subject from './components/Subject'
export default {
  name: 'app',
  data () {
    return {
      resume: JSON.parse(window.localStorage.getItem('resume')) || {
        core: [
          {name: '姓名', value: '陈亮'},
          {name: '职业', value: '前端工程师'},
          {name: '电话', value: '18761699850'},
          {name: '邮箱', value: 'chlo0o@qq.com'},
          {name: '简介', value: '男，23岁，前端偏前'}
        ],
        skils: [
          {name: 'JS', skil: 60},
          {name: 'CSS', skil: 80},
          {name: 'HTML', skil: 80}
        ],
        exp: [
          {name: '工作经历',
            exp: [
              {startTime: '2016-5-9', endTime: '', company: '聚奢网络科技', job: '前端工程师', exps: '负责部分商城、分销、后台、移动端及APP内置页面的制作，协助后端开发部分系统。'}
            ]
          },
          {name: '项目经历',
            exp: [
              {startTime: '2015-7-1', endTime: '', company: '个人项目', job: '无', exps: '个人技术博客\nhttp://www.vastskycc.com/\n2015年7月注册，2016年5月改版上线，平均每月更新三篇技术文章'},
              {startTime: '2016-5-9', endTime: '', company: '聚奢网络科技', job: '前端工程师', exps: '聚奢网自己负责制作的页面\nhttps://github.com/ccchangkong/work_jushewang\n传统前端项目，电脑端兼容IE8+，移动端兼容微信webview，渐进增强，后退平稳，编码风格日趋规范'},
              {startTime: '2016-11-1', endTime: '2016-11-20', company: '个人项目', job: '无', exps: '基于vue+muse-ui的简历生成器\nhttps://github.com/ccchangkong/ccresume/\n由webpack构建，vue2.0驱动，muse-ui样式库搭建，组件化开发，localstrong存储，jquery free'}
            ]
          },
          {name: '教育经历',
            exp: [
              {startTime: '2012-5-1', endTime: '2015-7-1', company: '南京信息职业技术学院', job: '学生', exps: '电子信息工程专业'},
              {startTime: '2014-7-1', endTime: '2016-7-1', company: '南京理工大学', job: '学生', exps: '接本，电子信息工程专业'}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: '2015年开始接触前端技术，在学新技术的同时研读专业书籍前端水平在初级至中级之间，偏向于前端偏前领域;为人乐观开朗，学习能力尚可'},
          {name: '技能水平', exps: 'Javascript：能使用原生JS及JQ实现较兼容的常用功能及动画效果，对node.js及vue.js有所学习及应用；\nHtml: 熟悉DOM，能编写规范、语义化的页面结构；\nCss: 熟悉常用样式及效果实现，对css标准有较深刻的理解，对css3有所学习及应用；\n其他：切图熟练，熟悉打包及构建工具，熟悉版本管理工具。'},
          {name: '社区账号', exps: 'github(https://github.com/ccchangkong);\nsegmentfault(https://segmentfault.com/u/ccchangkong)'}
        ]
      },
      avatar: JSON.parse(window.localStorage.getItem('avatar')) || '',
      cresume: {
        core: [
          {name: '姓名', value: '陈亮'},
          {name: '职业', value: '前端工程师'},
          {name: '电话', value: '18761699850'},
          {name: '邮箱', value: 'chlo0o@qq.com'},
          {name: '简介', value: '男，23岁，前端偏前'}
        ],
        skils: [
          {name: 'JS', skil: 60},
          {name: 'CSS', skil: 80},
          {name: 'HTML', skil: 80}
        ],
        exp: [
          {name: '工作经历',
            exp: [
              {startTime: '2016-5-9', endTime: '', company: '聚奢网络科技', job: '前端工程师', exps: '负责部分商城、分销、后台、移动端及APP内置页面的制作，协助后端开发部分系统。'}
            ]
          },
          {name: '项目经历',
            exp: [
              {startTime: '2015-7-1', endTime: '', company: '个人项目', job: '无', exps: '个人技术博客\nhttp://www.vastskycc.com/\n2015年7月注册，2016年5月改版上线，平均每月更新三篇技术文章'},
              {startTime: '2016-5-9', endTime: '', company: '聚奢网络科技', job: '前端工程师', exps: '聚奢网自己负责制作的页面\nhttps://github.com/ccchangkong/work_jushewang\n传统前端项目，电脑端兼容IE8+，移动端兼容微信webview，渐进增强，后退平稳，编码风格日趋规范'},
              {startTime: '2016-11-1', endTime: '2016-11-20', company: '个人项目', job: '无', exps: '基于vue+muse-ui的简历生成器\nhttps://github.com/ccchangkong/ccresume/\n由webpack构建，vue2.0驱动，muse-ui样式库搭建，组件化开发，localstrong存储，jquery free'}
            ]
          },
          {name: '教育经历',
            exp: [
              {startTime: '2012-5-1', endTime: '2015-7-1', company: '南京信息职业技术学院', job: '学生', exps: '电子信息工程专业'},
              {startTime: '2014-7-1', endTime: '2016-7-1', company: '南京理工大学', job: '学生', exps: '接本，电子信息工程专业'}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: '2015年开始接触前端技术，在学新技术的同时研读专业书籍前端水平在初级至中级之间，偏向于前端偏前领域;为人乐观开朗，学习能力尚可'},
          {name: '技能水平', exps: 'Javascript：能使用原生JS及JQ实现较兼容的常用功能及动画效果，对node.js及vue.js有所学习及应用；\nHtml: 熟悉DOM，能编写规范、语义化的页面结构；\nCss: 熟悉常用样式及效果实现，对css标准有较深刻的理解，对css3有所学习及应用；\n其他：切图熟练，熟悉打包及构建工具，熟悉版本管理工具。'},
          {name: '社区账号', exps: 'github(https://github.com/ccchangkong);\nsegmentfault(https://segmentfault.com/u/ccchangkong)'}
        ]
      }
    }
  },
  components: {
    Sidebar,
    Subject
  },
  methods: {
    add (vl, type, index, types) {
      let vls = {}
      for (let i in vl) {
        vls[i] = vl[i]
        vl[i] = ''
      }
      if (arguments.length === 2) {
        this.resume[type].push(vls)
      } else {
        this.resume[type][index][types].push(vls)
      }
    },
    del (vl, type, index, types) {
      if (arguments.length === 2) {
        this.resume[type].splice(vl, 1)
      } else {
        this.resume[type][index][types].splice(vl, 1)
      }
    },
    clear () {
      // window.alert(this.resume['exp'][0]['exp'][0].exps)
      window.localStorage.removeItem('resume')
      window.localStorage.removeItem('avatar')
      this.reset()
    },
    change (vl) {
      this.avatar = vl
    },
    reset () {
      this.resume = {
        core: [
          {name: '姓名', value: ''},
          {name: '职业', value: ''},
          {name: '电话', value: ''},
          {name: '简介', value: ''}
        ],
        skils: [
          {name: 'skilname', skil: 10},
          {name: 'skilname', skil: 22},
          {name: 'skilname', skil: 30}
        ],
        exp: [
          {name: '教育经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: ''}
            ]
          },
          {name: '工作经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: ''}
            ]
          },
          {name: '项目经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: ''}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: ''}
        ]
      }
      this.avatar = ''
    },
    cc () {
      this.resume = this.cresume
    }
  },
  watch: {
    resume: {
      handler: function (resume) {
        window.localStorage.setItem('resume', window.JSON.stringify(resume))
      },
      deep: true
    },
    avatar: {
      handler: function (avatar) {
        window.localStorage.setItem('avatar', window.JSON.stringify(avatar))
      }
    }
  }
}
</script>

<style>
#app {
  width: 1200px;
  margin: auto;
  box-shadow: 0 0 5px #333;
  display: flex;

}
#app .mu-slider-thumb {
background-color:#fff;
color: #fff;
}
#app .mu-slider-fill {
 background-color:#fff;
}
body {
    padding-left: calc(100vw - 100%);
}
</style>


