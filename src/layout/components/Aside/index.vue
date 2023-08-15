<!-- 左侧部分 -->
<template>
  <el-menu
    :default-active="$router.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409eff"
  >
    <h3>
      {{ `${isCollapse ? "" : "小杰UI库"}` }}
      <i class="el-icon-eleme" v-show="isCollapse"></i>
    </h3>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.label"
      v-for="item in hasChildren"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          label: "组件",
          icon: "edit-outline",
          children: [
            {
              path: "/components/ruler",
              label: "尺子",
              icon: "tickets",
            },
          ],
        },
        {
          label: "指令",
          icon: "edit-outline",
          children: [
            {
              path: "/directives/drag",
              label: "拖拽",
              icon: "tickets",
            },
          ],
        },
      ],
      isCollapse: false,
    };
  },
  mounted() {
    this.$bus.$on("showCollapse", () => {
      this.isCollapse = !this.isCollapse;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push(item.path);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
  height: 100vh;
  // min-height: 765px;
}
h3 {
  text-align: center;
  color: #fff;
  padding-top: 10px;
  margin-bottom: 20px;
}
</style>
