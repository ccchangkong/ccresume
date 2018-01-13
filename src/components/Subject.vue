<template>
  <div class="subject">

    <div v-for="(item, index) in sExp" class="crad-ul" :key="item.index">
      <v-card>
        <v-card-title>
          <div class="v-title">{{item.name}}</div>
        </v-card-title>
        <v-card-text>
          <div v-for="(items, indexs) in item.exp" class="crad-li" :key="items.index">
            <div class="v-layout">
              <div class="v-layout-item" width="100" tablet="50" desktop="50">
                <v-menu lazy :close-on-content-click="false" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                  <v-text-field slot="activator" label="开始日期" v-model="items.startTime" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="items.startTime" no-title scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
              </div>
              <div class="v-layout-item" width="100" tablet="100" desktop="50">
                <v-menu lazy :close-on-content-click="false" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                  <v-text-field slot="activator" label="结束日期" v-model="items.startTime" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="items.endTime" no-title scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
              </div>
              <div class="v-layout">
                <div class="v-layout-item" width="100" tablet="50" desktop="50">
                  <v-text-field label="单位" :value='items.company'></v-text-field>
                </div>
                <div class="v-layout-item" width="100" tablet="50" desktop="50">

                  <v-text-field label="职务" :value='items.job'></v-text-field>
                </div>
                <div class="v-layout-item" width="100" tablet="100" desktop="100">
                  <v-text-field label="描述" :value='items.exps' rows=2 multi-line></v-text-field>
                </div>
                <div class="card-exp-del-box">
                  <v-btn class="card-exp-del" fab small @click="sDel(indexs,'exp',index,'exp')">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="card-exp-add" fab small @click="open('dialogExp',index)">
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="custom-ul" v-for="item in sCustom" :key="item.index">
      <v-card class='custom-lis'>
        <v-card-title>
          <div class="v-title">{{item.name}}</div>
        </v-card-title>
        <v-card-text class='custom-li'>
          <v-text-field label="描述" :value='item.exps' rows=2 multi-line></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn class="card-exp-add" fab small @click="sDel(index,'custom')">
            <v-icon>clear</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="card-add-big-box">
      <v-btn class="card-add-big" fab small @click="open('dialogCard')">
        <v-icon>add</v-icon>
      </v-btn>
    </div>

    <v-dialog v-model="dialogExp">
      <v-card>
        <v-card-title>添加</v-card-title>
        <v-card-text>
          <div class="v-layout">
            <div class="v-layout-item" width="100" tablet="50" desktop="50">
              <v-menu lazy :close-on-content-click="false" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                <v-text-field slot="activator" label="开始日期" v-model="addExpValue.startTime" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="addExpValue.startTime" no-title scrollable actions>
                  <template slot-scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="v-layout-item" width="100" tablet="100" desktop="50">
              <v-menu lazy :close-on-content-click="false" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                <v-text-field slot="activator" label="结束日期" v-model="addExpValue.endTime" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="addExpValue.endTime" no-title scrollable actions>
                  <template slot-scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                      <v-btn flat color="primary" @click="save">OK</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="v-layout">
              <div class="v-layout-item" width="100" tablet="50" desktop="50">
                <v-text-field label="单位" :value='addExpValue.company'></v-text-field>
              </div>
              <div class="v-layout-item" width="100" tablet="50" desktop="50">
                <v-text-field label="职务" :value='addExpValue.job'></v-text-field>
              </div>
              <div class="v-layout-item" width="100" tablet="100" desktop="100">
                <v-text-field label="描述" :value='addExpValue.exps'></v-text-field>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="close('dialogExp')">取消</v-btn>
          <v-btn color="primary" @click="sAdd(addExpValue, 'exp', 'dialogExp', dialogExpI, 'exp')">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCard">
      <v-card>
        <v-card-title>新建卡片</v-card-title>

        <v-card-text>
          <v-text-field label="标题" :value="addCardValue.name"></v-text-field>
          <v-text-field label="描述" :value="addCardValue.exps"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn color="error" @click="close('dialogCard')">取消</v-btn>
          <v-btn color="primary" @click="sAdd(addCardValue, 'custom', 'dialogCard')">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: "subject",
  props: ["sResume"],
  data() {
    return {
      dialogExp: false,
      dialogExpI: 0,
      dialogCard: false,
      addExpValue: {
        startTime: "",
        endTime: "",
        company: "",
        job: "",
        exps: ""
      },
      addCardValue: {
        name: "",
        exps: ""
      },
      sExp: this.sResume.exp,
      sCustom: this.sResume.custom
    };
  },
  methods: {
    sAdd(vl, type, dl, index, types) {
      this.close(dl);
      if (arguments.length === 3) {
        this.$emit("sAdd", vl, type);
      } else {
        this.$emit("sAdd", vl, type, index, types);
      }
    },
    sDel(vl, type, index, types) {
      if (arguments.length === 2) {
        this.$emit("sDel", vl, type);
      } else {
        this.$emit("sDel", vl, type, index, types);
      }
    },
    open(vl, index) {
      if (arguments.length === 1) {
        this[vl] = true;
      } else {
        this[vl] = true;
        this.dialogExpI = index;
      }
    },
    close(vl) {
      this[vl] = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.subject {
  width: 75%;
  min-height: 100vh;
  background-color: #ddd;
  color: #333;
  transition: 0.5s;
  padding: 1.5em 2em;
  position: relative;
  overflow: hidden;
}

.subject:hover {
  background-color: #eee;
}




.crad-li .card-exp-del,
.crad-ul .card-exp-add,
.custom-lis .custom-del,
.custom-li .card-exp-del,
.subject .card-add-big {
  opacity: 0;
  transition: 0.5s;
}

.crad-li:hover .card-exp-del,
.crad-ul:hover .card-exp-add,
.custom-lis:hover .custom-del,
.custom-li:hover .card-exp-del,
.subject:hover .card-add-big {
  opacity: 1;
  /*visibility: visible;*/
  display: inline-block;
}
.crad-li .card-exp-del {
  display: none;
}
.crad-li:hover .card-exp-del {
  display: inline-block;
}
.crad-li,
.custom-li {
  position: relative;
  padding: 0 2em;
}



.subject .card-exp-del-box {
  top: 17px;
  left: 0;
  position: absolute;
  height: 0;
}
.subject:hover .card-exp-del-box {
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


