<template>
  <div id="app">
    <h2>首页</h2>
      <table width="500px" border="1px" cellspacing="0" cellpadding="5px">
        <tr>
          <th>序号</th>
          <th>商品</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
        <tr v-for="(i,index) in shuju">
          <th>{{index+1}}</th>
          <th>{{i.name}}</th>
          <th>￥{{i.price}}</th>
          <th><button @click="tianjia(i)">来一份</button></th>
        </tr>
      </table>
    <shopcar></shopcar>
  </div>
</template>

<script>
  import shopcar from './shopcar'
export default {
  data () {
    return {
    }
  },
  created(){
    console.log(this.shuju)
  },
 components:{
    shopcar,
  },
  computed:{
    shuju(){
      return this.$store.state.caidan
    }
  },
  methods:{
   tianjia(data){
    this.$store.commit('tianjia',data)
   }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    margin: 0 auto;
  }
</style>
