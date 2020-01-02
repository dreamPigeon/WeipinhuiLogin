/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'



import user from './modules/user'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    user
  }
})