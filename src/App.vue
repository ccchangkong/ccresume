<template>
  <div id="app">
    <sidebar :sCore="resume.core" :sSkils='resume.skils' :sAvatar='resume.avatar' @sAdd="add" @sDel='del' @sClear='clear' @changePic='change'></sidebar>
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
          {name: 'name', value: ''},
          {name: 'job', value: ''},
          {name: 'tel', value: ''},
          {name: 'profile', value: ''}
        ],
        skils: [
          {name: 'JS', skil: 10},
          {name: 'CSS', skil: 22},
          {name: 'HTML', skil: 30}
        ],
        exp: [
          {name: '工作经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: ''}
            ]
          },
          {name: '教育经历',
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
        ],
        avatar: 'http://ww3.sinaimg.cn/large/6c7bfb12gw1f9xkbfmmqjj20bo0bo3zj.jpg'
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
      this.reset()
    },
    change (vl) {
      this.resume.avatar = vl
    },
    reset () {
      this.resume = {
        core: [
          {name: 'name', value: ''},
          {name: 'job', value: ''},
          {name: 'tel', value: ''},
          {name: 'profile', value: ''}
        ],
        skils: [
          {name: 'name', skil: 10},
          {name: 'name', skil: 22},
          {name: 'name', skil: 30}
        ],
        exp: [
          {name: '工作经历',
            exp: [
              {startTime: '', endTime: '', company: '', job: '', exps: ''}
            ]
          },
          {name: '教育经历',
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
        ],
        avatar: 'http://ww3.sinaimg.cn/large/6c7bfb12gw1f9xkbfmmqjj20bo0bo3zj.jpg'
      }
    }
  },
  watch: {
    resume: {
      handler: function (resume) {
        window.localStorage.setItem('resume', window.JSON.stringify(resume))
      },
      deep: true
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
}
#app .mu-slider-fill {
 background-color:#fff;
}
</style>


