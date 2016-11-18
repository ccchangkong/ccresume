<template>
  <div class="subject">
<div class="card-ul" v-for="item in sExp">
  <mu-card>
    <mu-card-title :title="item.name" subTitle="Content Title" />
    <mu-card-text>
      <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="item.startTime" />
      <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="item.endTime" />
      <mu-text-field label="公司" labelFloat v-model='item.company' />
      <mu-text-field label="职务" labelFloat v-model='item.job' />
      <mu-text-field label="描述" labelFloat v-model='item.exps' />
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button label="添加" />
      <mu-flat-button label="删除" />
    </mu-card-actions>
  </mu-card>
</div>

    <div class="custom-ul" v-for="item in sCustom">

      <mu-card>
    <mu-card-title :title="item.name" subTitle="Content Title" />
    <mu-card-text>
      <mu-text-field label="描述" labelFloat v-model='item.exps' multiLine :rows="3" :rowsMax="6"/>
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button label="添加" />
      <mu-flat-button label="删除" />
    </mu-card-actions>
  </mu-card>
 </div>
    <!-- <mu-flat-button label="添加"  @click="sAdd(addValue, 'skils')" /> -->
    <mu-flat-button label="添加" @click="sAdd(value1)" />
  </div>
</template>







<script>
export default {
  name: 'subject',
  props: ['sExp', 'sCustom'],
  methods: {
    sAdd: function (vl) {
      this.$emit('sAdd', vl)
    }
  },
  data () {
    return {
      pickerOptions0: {
      },
      value1: {
        name: '',
        skil: 5
      },
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

