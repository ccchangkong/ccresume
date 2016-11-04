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
    onInputs: function () {
      this.values += 1
      var data = {
        value: this.values,
        time: window.Date.now()
      }
      this.resume.push(data)
      console.log(this.values)
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
    font-size: 0;
    box-shadow: 0 0 5px #333;
}
p{
  font-size: 10px;
}


</style>
