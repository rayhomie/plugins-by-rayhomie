/*
    入口JS：创建Vue实例
    */

import Vue from 'vue'
import App from "./App.vue"
new Vue({
  el:'#app',  //是根据index.html里面的div的id值
  components:{
    App
  },
  template:'<App/>'  //模板：vue生命周期中有定义

})

