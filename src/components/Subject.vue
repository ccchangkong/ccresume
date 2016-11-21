<template>
  <div class="subject">

    <div v-for="(item, index) in sExp" class="crad-ul">
        <mu-card>
          <mu-card-title :title="item.name" />
          <div v-for="(items, indexs) in item.exp" class="crad-li">
              <mu-card-text>
                              <mu-row gutter>
                  <mu-col width="100" tablet="50" desktop="50">
                    <mu-date-picker container="inline" mode="landscape" hintText="开始日期" v-model="items.startTime" />
                  </mu-col>
                  <mu-col width="100" tablet="100" desktop="50">
                      <mu-date-picker container="inline" mode="landscape" hintText="结束日期" v-model="items.endTime" />
                </mu-row>
                <mu-row gutter>
                  <mu-col width="100" tablet="50" desktop="50">
                    <mu-text-field label="单位" labelFloat v-model='items.company' />
                  </mu-col>
                  <mu-col width="100" tablet="50" desktop="50">
                    <mu-text-field label="职务" labelFloat v-model='items.job' />
                  </mu-col>
                  <mu-col width="100" tablet="100" desktop="100">
                    <mu-text-field label="描述" labelFloat v-model='items.exps' fullWidth  multiLine :rows="2" :rowsMax="60" class='card-text'/></mu-col>
                </mu-row>
                <div class="card-exp-del-box"><mu-icon-button icon="delete" label="删除" @click="sDel(indexs,'exp',index,'exp')" class='card-exp-del'/></div>                  
              </mu-card-text>
            </div>
          <mu-card-actions>
            <mu-float-button label="添加" @click="open('dialogExp',index)" primary  class='card-exp-add' mini icon="add"/>
          </mu-card-actions>
        </mu-card>
    </div>
          <div class="custom-ul" v-for="item in sCustom">
      <mu-card class='custom-li'>
        <mu-card-title :title="item.name"/>
        <mu-card-text>
          <mu-text-field label="描述" labelFloat v-model='item.exps' multiLine :rows="2" :rowsMax="60" fullWidth class='custom-text'/>
        </mu-card-text>
        <mu-card-actions>
          <mu-float-button label="删除" @click="sDel(index,'custom')" class='custom-del' icon='clear' mini secondary />
        </mu-card-actions>
      </mu-card>
    </div>
    <div class="card-add-big-box">
    <mu-float-button label="新建卡片" @click="open('dialogCard')" class='card-add-big' icon='add'/>    
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
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.subject:hover {
  background-color: #eee;
}

.mu-card {
  margin-bottom: 1em;
}


/*.subject::-webkit-scrollbar{
  display: none;
}*/

.subject .custom-text,
.subject .card-text {
  height: auto;
}

.subject .mu-text-field-textarea {
  height: auto !important;
}

.crad-li .card-exp-del,
.crad-ul .card-exp-add,
.custom-li .custom-del,
.custom-li .card-exp-del,
.subject .card-add-big {
  opacity: 0;
  /*visibility: ;*/
  /*display: none;*/
  transition: .5s;
}

.crad-li:hover .card-exp-del,
.crad-ul:hover .card-exp-add,
.custom-li:hover .custom-del,
.custom-li:hover .card-exp-del,
.subject:hover .card-add-big {
  opacity: 1;
  /*visibility: visible;*/
  display: inline-block;
}
.crad-li .card-exp-del{
  display: none;
}
.crad-li:hover .card-exp-del{
    display: inline-block;
}
.crad-li,
.custom-li {
  position: relative;
  padding: 0 2em;
}

.crad-ul .mu-card-actions {
  padding-top: 0;
}

.mu-card-actions {
  text-align: end;
}
.subject .card-exp-del-box{
  top: 17px;
  left: 0;
  position: absolute;
  height: 0;
}
.subject:hover .card-exp-del-box{
  height: auto;
}

.subject .card-add-big-box {
  height: 0;
  text-align: end;
}

.subject:hover .card-add-big-box {
  height: auto;
}
</style>


