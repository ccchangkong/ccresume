<template>
  <div id="app">
    <sidebar :sCore="resume.core" :sSkils='resume.skils' @sAdd="add" @sDel='del'></sidebar>
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
          {name: 'name', skil: 1},
          {name: 'name', skil: 2},
          {name: 'name', skil: 3}
        ],
        exp: [
          {name: '工作经历', startTime: '', endTime: '', company: '', job: '', exps: ''},
          {name: '教育经历', startTime: '', endTime: '', company: '', job: '', exps: ''},
          {name: '项目经历', startTime: '', endTime: '', company: '', job: '', exps: ''}
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
      this.resume[type].push(vl)
      // window.localStorage.setItem('resume', window.JSON.stringify(this.resume))
    },
    del: function (vl, type) {
      this.resume[type].splice(vl, 1)
    },
    change: function () {
      window.localStorage.setItem('resume', window.JSON.stringify(this.resume))
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
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#app {
  width: 1200px;
  margin: auto;
  font-size: 0;
  box-shadow: 0 0 5px #333;
  display: flex;
}

p {
  font-size: 10px;
}
.ex{
  width: 1200px;
}
#app .el-input__inner,
#app .el-input-group__prepend {
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  text-align: center;
  font-size: 1.4em;
}

#app .el-date-editor__editor {
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
}

#app .el-card {
  background-color: rgba(256, 256, 256, 0.9);
  margin: 10px;
  margin-top: auto;
}
</style>


