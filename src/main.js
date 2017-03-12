import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

/* 把axios对象挂到Vue实例上面，其他组件在使用axios的时候直接  this.$http就可以了 */
 Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
