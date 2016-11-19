<template>
  <div class="subject">
    <div class="card-ul" v-for="(item, index) in sExp">
      <mu-card>
        <mu-card-title :title="item.name" subTitle="Content Title" />
        <div class="card-ul" v-for="(items, indexs) in item.exp">
          <mu-card-text>
            <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="items.startTime" />
            <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="items.endTime" />
            <mu-flat-button label="删除" @click="sDel(indexs,'exp',index,'exp')"/>
            <mu-row gutter>
              <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="单位" labelFloat v-model='items.company' />
              </mu-col>
              <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="职务" labelFloat v-model='items.job' />
              </mu-col>
              <mu-col width="100" tablet="100" desktop="100">
                <mu-text-field label="描述" labelFloat v-model='items.exps' fullWidth /></mu-col>
            </mu-row>
        </div>
        </mu-card-text>
        <mu-card-actions>
          <mu-flat-button label="添加" @click="open('dialogExp',index)" primary/>
           <!-- <mu-flat-button label="删除" @click="sDel(index,'exp')"/> -->
        </mu-card-actions>
      </mu-card>
    </div>
    <div class="custom-ul" v-for="item in sCustom">
      <mu-card>
        <mu-card-title :title="item.name" subTitle="Content Title" />
        <mu-card-text>
          <mu-text-field label="描述" labelFloat v-model='item.exps' multiLine :rows="3" :rowsMax="6" fullWidth />
        </mu-card-text>
        <mu-card-actions>
          <!-- <mu-flat-button label="添加" /> -->
          <mu-flat-button label="删除" @click="sDel(index,'custom')"/>
        </mu-card-actions>
      </mu-card>
    </div>
    <mu-dialog v-if="dialogExp" title="添加" @close="close('dialogExp')">
      <mu-text-field label="标题" labelFloat v-model='addExpValue.startTime' />
      <mu-text-field label="标题" labelFloat v-model='addExpValue.endTime' />
      <mu-text-field label="标题" labelFloat v-model='addExpValue.company' />
      <mu-text-field label="标题" labelFloat v-model='addExpValue.job' />
      <mu-text-field label="标题" labelFloat v-model='addExpValue.exps' />
      <mu-flat-button slot="actions" @click="close('dialogExp')" primary label="取消" />
      <mu-flat-button slot="actions" keyboardFocused primary @click="sAdd(addExpValue, 'exp', 'dialogExp', dialogExpI, 'exp')" label="确定" />
    </mu-dialog>
    <mu-flat-button label="新建卡片" @click="open('dialogCard')" />
    <mu-dialog v-if="dialogCard" title="新建卡片" @close="close('dialogCard')">
      <mu-text-field label="标题" labelFloat v-model='addCardValue.name' />
      <mu-text-field label="描述" labelFloat v-model='addCardValue.exps' />
      <mu-flat-button slot="actions" @click="close('dialogCard')" primary label="取消" />
      <mu-flat-button slot="actions" keyboardFocused primary @click="sAdd(addCardValue, 'custom', 'dialogCard')" label="确定" />
    </mu-dialog>
  </div>
</template>




<script>
export default {
  name: 'subject',
  props: ['sExp', 'sCustom'],
  data () {
    return {
      dialogExp: false,
      dialogExpI: 0,
      dialogCard: false,
      addExpValue: {
        startTime: '',
        endTime: '',
        company: '',
        job: '',
        exps: ''
      },
      addCardValue: {
        name: '',
        exps: ''
      }
    }
  },
  methods: {
    sAdd (vl, type, dl, index, types) {
      this.close(dl)
      if (arguments.length === 3) {
        this.$emit('sAdd', vl, type)
      } else {
        this.$emit('sAdd', vl, type, index, types)
      }
    },
    sDel (vl, type, index, types) {
      if (arguments.length === 2) {
        this.$emit('sDel', vl, type)
      } else {
        this.$emit('sDel', vl, type, index, types)
      }
    },
    open (vl, index) {
      if (arguments.length === 1) {
        this[vl] = true
      } else {
        this[vl] = true
        this.dialogExpI = index
      }
    },
    close (vl) {
      this[vl] = false
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
.mu-card{
  margin-bottom: 1em;
}
</style>

