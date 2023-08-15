import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Layout from "@/layout";

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
  },
  {
    path: "/components",
    name: "components",
    component: Layout,
    children: [
      {
        path: "ruler",
        name:"尺子",
        component: () => import("@/views/ruler"),
      },
    ],
  },
  {
    path: "/directives",
    name: "directives",
    component: Layout,
    children: [
      {
        path: "drag",
        name:"拖拽",
        component: () => import("@/views/drag"),
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  routes,
});

export default router;
