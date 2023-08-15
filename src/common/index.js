import Components from "./components";

import Directives from "./directives";

import * as fun from "./functions";

export default {
  install(Vue, options) {
    // 注册所有公共组件
    Vue.use(Components);
    // 注册所有公共指令
    Vue.use(Directives);
    // 注册所有公共函数
    Vue.prototype.$fun = fun;
  },
};
