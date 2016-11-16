<template>
  <div class="subject">
    <div class="card-ul" v-for="item in sExp">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>{{item.name}}</h2>
          <el-button style="float: right;" type="primary" icon="plus">添加</el-button>
        </div>
        <div class="block">
          <el-date-picker v-model="item.startTime" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
          <el-date-picker v-model="item.endTime" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
          <el-input placeholder="请输入内容" v-model="item.company">
            <template slot="prepend">公司</template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="item.job">
            <template slot="prepend">职务</template>
          </el-input>
          <el-input placeholder="描述" v-model="item.exps"></el-input>
        </div>
      </el-card>
    </div>
    <div class="custom-ul" v-for="item in sCustom">
       <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>{{item.name}}</h2>
      </div>
      <div class="block">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="item.exps" @change='onInput(item.exps)'>
        </el-input>
      </div></div>

    </el-card>
    <el-button style="float: right;" type="primary" icon="plus" @click="onInput(value1)">添加</el-button>
  </div>
</template>






<script>
export default {
  name: 'subject',
  props: ['sExp', 'sCustom', 'valuess'],
  methods: {
    onInput: function (vl) {
      this.$emit('onInput', vl)
    }
  },
  data () {
    return {
      pickerOptions0: {
      },
      value1: '',
      value6: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subject {
  width: 75%;
  min-height: 100vh;
  background-color: #ddd;
  color: #333;
  transition: .5s;
  font-size: 1.5em;
  padding: 20px 10px;
  box-sizing:border-box;
}

.subject:hover {
  background-color: #eee;
}
/*.subject::-webkit-scrollbar{
  display: none;
}*/

h2 {
  font-size: 26px;
  text-align: left;
  display: inline-block;
}
</style>

