<template>
  <div class="subject">
    <div class="card-ul" v-for="(item, index) in sExp">
      <mu-card>
        <mu-card-title :title="item.name" subTitle="Content Title" />
        <div class="card-ul" v-for="(items, indexs) in item.exp">
          <mu-card-text>
            <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="items.startTime" />
            <mu-date-picker container="inline" mode="landscape" hintText="选择日期" v-model="items.endTime" />
            <mu-flat-button label="删除" /> {{index}} - {{indexs}}
            <mu-row gutter>
              <mu-col width="100" tablet="50" desktop="50">
                <mu-text-field label="公司" labelFloat v-model='items.company' />
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
                  <mu-flat-button label="添加" @click="open('dialogExp')" />
          <mu-dialog v-if="dialogExp" title="添加" @close="close('dialogExp')">
            <mu-flat-button slot="actions" @click="close('dialogExp')" primary label="取消" />
          </mu-dialog>
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
          <mu-flat-button label="删除" />
        </mu-card-actions>
      </mu-card>
    </div>



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
  methods: {
    sAdd (vl, type, dl) {
      this.close(dl)
      this.$emit('sAdd', vl, type)
    },
    open (vl) {
      this[vl] = true
      // document.body.appendChild(document.querySelector('.mu-overlay'))
    },
    close (vl) {
      this[vl] = false
      this.$emit('close', 'overlay')
      // document.body.removeChild(document.querySelector('.mu-overlay'))
    }
  },
  data () {
    return {
      dialogExp: false,
      dialogCard: false,
      addCardValue: {
        name: '',
        exps: ''
      }
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

