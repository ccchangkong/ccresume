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
      },
      avatar: JSON.parse(window.localStorage.getItem('avatar')) || '',
      cresume: {
        core: [
          {name: '姓名', value: '陈亮'},
          {name: '职业', value: '前端工程师'},
          {name: '电话', value: '18761699850'},
          {name: '简介', value: '前端偏前'}
        ],
        skils: [
          {name: 'JS', skil: 60},
          {name: 'CSS', skil: 80},
          {name: 'HTML', skil: 80}
        ],
        exp: [
          {name: '教育经历',
            exp: [
              {startTime: '2016-11-23', endTime: '2016-11-23', company: '南京信息职业技术学院', job: '学生', exps: '无'},
              {startTime: '2016-11-23', endTime: '2016-11-23', company: '南京理工大学', job: '学生', exps: '无'}
            ]
          },
          {name: '工作经历',
            exp: [
              {startTime: '', endTime: '', company: '聚奢网络科技', job: '前端工程师', exps: '负责部分商城、分销、后台、移动端及APP内置页面的制作，协助后端开发部分系统。'}
            ]
          },
          {name: '项目经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: '个人技术博客http://www.vastskycc.com/'},
              {startTime: '', endTime: '', company: '', job: '', exps: '聚奢网自己负责制作的页面https://github.com/ccchangkong/work_jushewang'},
              {startTime: '', endTime: '', company: '', job: '', exps: '基于vue+muse-ui的简历生成器https://github.com/ccchangkong/ccresume/'}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: '2015年开始接触前端技术，在学新技术的同时研读专业书籍，水平在初级到中级前端工程师之间，偏向于前端偏前领域。'}
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


