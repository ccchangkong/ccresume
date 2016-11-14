<template>
  <div class="subject">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>工作经历</h2>
        <el-button style="float: right;" type="primary" icon="plus">添加</el-button>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>教育经历</h2>
        <el-button style="float: right;" type="primary">操作按钮</el-button>
      </div>
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>项目经历</h2>
        <el-button style="float: right;" type="primary">操作按钮</el-button>
      </div>
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
          <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
      </div>
    </el-card>
    <el-button style="float: right;" type="primary" icon="plus">添加</el-button>
  </div>
</template>



<script>
export default {
  name: 'subject',
  props: ['valuess'],
  methods: {
    onInput: function () {
      this.$emit('onInput')
    }
  },
  data () {
    return {
      pickerOptions0: {
      },
      value1: '',
      value2: ''
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

h2 {
  font-size: 26px;
  text-align: left;
  display: inline-block;
}
</style>

