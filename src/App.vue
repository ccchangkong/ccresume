<template>
  <div id="app">
    <sidebar :sCore="resume.core" :sSkils='resume.skils'></sidebar>
    <subject :valuess="values" :sExp='resume.exp' :sCustom='resume.custom' @onInput="onInputs"></subject>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar'
import Subject from './components/Subject'
export default {
  name: 'app',
  data () {
    return {
      values: 3,
      // resume: JSON.parse(window.localStorage.getItem('resume')) || {}
      resume: {
        core: {
          name: 'cc',
          job: 'f2er',
          tel: '110',
          profile: '萌新'
        },
        skils: [
          {name: 'js', skil: 1},
          {name: 'css', skil: 4},
          {name: 'html', skil: 5}
        ],
        exp: [
          {name: '工作经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'},
          {name: '教育经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'},
          {name: '项目经历', startTime: '2016-10-03', endTime: '2016-11-03', company: 'bat', job: 'f2er', exps: 'ssssssss'}
        ],
        custom: [
          {name: '自我评价', exps: 'naive'},
          {name: '项目经历', exps: 'ssssssss2'}
        ]
      }
    }
  },
  components: {
    Sidebar,
    Subject
  },
  methods: {
    onInputs: function (vl) {
      // this.values += 1
      // var data = {
      //   value: this.values,
      //   time: window.Date.now()
      // }
      // this.resume.push(data)
    }
  },
  watch: {
    resume: {
      handler: function (resume) {
        // window.alert(window.JSON.stringify(resume))
        window.localStorage.setItem('resume', window.JSON.stringify(resume))
      },
      deep: true
    }
  }
}
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


