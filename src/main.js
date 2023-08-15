import Vue from 'vue'
import App from './App.vue'
// 引入ant的模块
// import '@/plugins/antd'

// 引入elementui的模块
import '@/plugins/elementui'

// 引入路由
import router from './router'

/**
 * 引入公共模块
 */
import Common from "@/common";
Vue.use(Common);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
