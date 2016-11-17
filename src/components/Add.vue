<template>
  <div class="add">
          <el-input class='s-skils-title' v-model='sValue.name'></el-input>
        <el-input class='s-skils-title' v-model='sValue.skil'></el-input>
        <el-button type="primary" icon="plus" @click="sAdds(sValue, 'skils')">添加</el-button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'add',
  props: ['sValue'],
  data () {
    return {
      msg: '222'
    }
  },
  methods: {
    sAdds: function (vl, type) {
      this.$emit('sAdds', vl, type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
