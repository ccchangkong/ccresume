<template>
<div class="subject">
    <h2>工作经历</h2>
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker v-model="value7" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2" style="width: 220px">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
    </div>
        <h2>教育经历</h2>
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker v-model="value7" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2" style="width: 220px">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
    </div>
        <h2>项目经历</h2>
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker v-model="value7" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2" style="width: 220px">
        </el-date-picker>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">公司</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="value6">
            <template slot="prepend">职务</template>
        </el-input>
        <el-input placeholder="描述" v-model="value6"></el-input>
    </div>
    <div class="block">
        <p @click="onInput">{{valuess}}</p>
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="valuess"></el-rate>
    </div>
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
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value6: '',
      value7: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subject {
  display: inline-block;
  width: 75%;
  min-height: 700px;
  height: 100vh;
  background-color: #ddd;
  color: #333;
  transition: .5s;
  font-size: 1.5em;
}

.subject:hover {
  background-color: #eee;
}

h2 {
  font-size: 26px;
  text-align: left;
}
</style>

