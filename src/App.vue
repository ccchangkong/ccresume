<template>
  <div id="app">
  <!-- <p>{{values}}</p> -->
    <sidebar></sidebar>
    <subject :valuess.sync="values" @onInput="onInputs"></subject>
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
      resume: JSON.parse(window.localStorage.getItem('resume')) || []
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
      // console.log(this.values)
      // window.alert(vl)
      this.values = vl
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


