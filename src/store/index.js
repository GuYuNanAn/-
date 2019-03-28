import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    caidan:[
      {
        name:'杯子',
        price:'20',
        num:1
      }, {
        name:'桌子',
        price:'40',
        num:1
      }, {
        name:'椅子',
        price:'20',
        num:1
      }
    ],
    qingdan:[],
    zongge:0,
    zongjia:0
  },
  mutations:{
    tianjia(state,data){
      let panduan=true
      state.qingdan.map(item=>{
        if (item.name===data.name){
           panduan=false
        }
      })
      if (panduan){
        state.qingdan.push(data)
      } else {
        data.num++
      }

    },
    jia(state,data){
      data.num++
    },
    jian(state,data){
     data.num>0?data.num--:data.num=0
    },
    del(state,data){
    state.qingdan.splice(data,1)
    }
  },
  getters:{
    zongge(state){
     let a =0;
     state.qingdan.map(item=>{
       a+=item.num
     })
      state.zongge=a
      return state.zongge
    },
    zongjia(state){
     let a =0;
     state.qingdan.map(item=>{
       a+=item.num*item.price
     })
      state.zongjia=a
      return state.zongjia
    },

  }
})
export default store
