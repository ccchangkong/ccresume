<template>
  <div id="app">
    <sidebar :sCore="resume.core" :sSkils='resume.skils' @sAdd="add" @sDel='del' @sClear='clear'></sidebar>
    <subject :sExp='resume.exp' :sCustom='resume.custom' @sAdd="add"></subject>
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
          {name: 'name', skil: 10},
          {name: 'name', skil: 22},
          {name: 'name', skil: 30}
        ],
        exp: [
          // {name: '工作经历', startTime: '', endTime: '', company: '', job: '', exps: ''},
          // {name: '教育经历', startTime: '', endTime: '', company: '', job: '', exps: ''},
          {name: '项目经历',
            exp: [
            // {startTime: '', endTime: '', company: '', job: '', exps: ''},
            {startTime: '', endTime: '', company: '', job: '', exps: '22'}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: ''}
        ]
      }
    }
  },
  components: {
    Sidebar,
    Subject
  },
  methods: {
    add: function (vl, type) {
      let vls = {}
      for (let i in vl) {
        vls[i] = vl[i]
        vl[i] = ''
      }
      this.resume[type].push(vls)
    },
    del: function (vl, type) {
      this.resume[type].splice(vl, 1)
    },
    clear: function () {
      // window.alert(this.resume['exp'][0]['exp'][0].exps)
      window.localStorage.removeItem('resume')
      this.reset()
    },
    reset: function () {
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
          {name: 'name', skil: 33}
        ],
        exp: [
          {name: '项目经历',
            exp: [
            {startTime: '', endTime: '', company: '', job: '', exps: '1'},
            {startTime: '', endTime: '', company: '', job: '', exps: '2'},
            {startTime: '', endTime: '', company: '', job: '', exps: '3'}
            ]
          },
          {name: '教育经历',
            exp: [
            {startTime: '', endTime: '', company: '', job: '', exps: '1'},
            {startTime: '', endTime: '', company: '', job: '', exps: '2'},
            {startTime: '', endTime: '', company: '', job: '', exps: '3'}
            ]
          }
        ],
        custom: [
          {name: '自我评价', exps: ''}
        ]
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
// resume: {
//   core: [
//     {name: 'name', value: 'cc'},
//     {name: 'job', value: 'f2er'},
//     {name: 'tel', value: '110'},
//     {name: 'profile', value: '萌新'}
//   ],
//   skils: [
//     {name: 'js', skil: 1},
//     {name: 'css', skil: 4},
//     {name: 'html', skil: 5}
//   ],
//   exp: [
//     {name: '工作经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'},
//     {name: '教育经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'},
//     {name: '项目经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'}
//   ],
//   custom: [
//     {name: '自我评价', exps: 'naive'},
//     {name: '项目经历', exps: 'ssssssss2'}
//   ]
// }
</script>

<style>
#app {
  width: 1200px;
  margin: auto;
  box-shadow: 0 0 5px #333;
  display: flex;
}

</style>


