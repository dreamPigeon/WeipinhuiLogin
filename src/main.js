import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import * as API from '@/api'
import 'mint-ui/lib/style.css'
import store from './vuex/store'
import './validate'

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // 所有组件都能看到: $store
  store
}).$mount('#app')
              