<template>
  <div id="app">
    <h2>购物车</h2>
    <table width="500px" border="1px" cellspacing="0" cellpadding="5px">
      <tr>
        <th>序号</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      <tr v-for="(i,index) in qingdan">
        <th>{{index+1}}</th>
        <th>{{i.name}}</th>
        <th>￥{{i.price}}</th>
        <th>{{i.num}}</th>
        <th>￥{{i.price*i.num}}</th>
        <th>
          <button @click="jia(i)">+</button>
          <button @click="jian(i)">-</button>
          <button @click="del(i)">x</button>
        </th>
      </tr>
    </table>
    <p>总价：{{zongjia}}  总个数：{{zongge}}</p>
  </div>
</template>

<script>
    export default {
       computed:{
         qingdan(){
           return this.$store.state.qingdan
         },
         zongge(){
           return this.$store.getters.zongge
         },
         zongjia(){
           return this.$store.getters.zongjia
         }
       },
      methods:{
         jia(i){
           this.$store.commit('jia',i)
         },
        jian(i){
          this.$store.commit('jian',i)``
        },
        del(i){
          this.$store.commit('del',i)
        }
      }
    }
</script>

<style scoped>
table{
  margin: 0 auto;
}
</style>
