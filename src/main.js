import Vue from "vue";
import App from "./App.vue";
// 引入ant的模块
// import '@/plugins/antd'

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/styles/index.scss"; // global css

// 引入路由
import router from "./router";

// icon components
import "@/icons";
import components from "@/components";

Vue.use(ElementUI);
Vue.use(components)

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
}).$mount("#app");
