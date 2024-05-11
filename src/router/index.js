import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Layout from "@/layout";

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
  },
  // 首页
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },
  // 组件部分
  {
    path: "/components",
    name: "components",
    component: Layout,
    meta: { title: "组件", icon: "el-icon-menu" },
    children: [
      {
        path: "ruler",
        name: "尺子",
        component: () => import("@/views/components/ruler"),
        meta: { title: "尺子", icon: "user" },
      },
      {
        path: "splitPane",
        name: "可分割的边",
        component: () => import("@/views/components/splitPane"),
        meta: { title: "SplitPane", icon: "table" },
      },
      {
        path: "button",
        name: "可分割的边",
        component: () => import("@/views/components/button"),
        meta: { title: "按钮", icon: "button" },
      },
      {
        path: "tags",
        name: "可分割的边",
        component: () => import("@/views/components/tags"),
        meta: { title: "标签", icon: "tag" },
      },
    ],
  },
  // 指令
  {
    path: "/directives",
    name: "directives",
    component: Layout,
    redirect: "/directives/drag",
    meta: { title: "指令", icon: "directive" },
    children: [
      {
        path: "drag",
        name: "拖拽",
        component: () => import("@/views/directives/drag"),
        meta: { title: "拖拽", icon: "drag" },
      },
      {
        path: "loadMore",
        name: "拖拽",
        component: () => import("@/views/directives/loadMore"),
        meta: { title: "加载更多", icon: "load" },
      },
    ],
  },
  // echarts部分
  {
    path: "/echarts",
    name: "echarts",
    component: Layout,
    redirect: "/echarts/index",
    meta: { title: "ECharts", icon: "echarts" },
    children: [
      {
        path: "index",
        name: "ECharts",
        component: () => import("@/views/echarts/index"),
      },
      {
        path: "line",
        name: "ECharts",
        component: () => import("@/views/echarts/line"),
        meta: { title: "折线图", icon: "line" },
      },
    ],
  },
  // 二次封装组件
  {
    path: "/pro",
    name: "pro",
    component: Layout,
    redirect: "/pro/form",
    children: [
      {
        path: "form",
        meta: { title: "表单", icon: "form" },
        component: () => import("@/views/proComponents/form/index"),
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
