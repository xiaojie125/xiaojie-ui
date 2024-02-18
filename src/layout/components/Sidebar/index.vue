<template>
  <div :class="{ 'has-logo': true }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "@/layout/components/Sidebar/Logo";
import variables from "@/styles/variables.scss";
import SidebarItem from "@/layout/components/Sidebar/SidebarItem";

export default {
  name: "Sidebar",
  components: { SidebarItem, Logo },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
  created() {
    this.$parent.$on("sidebarOpened", () => {
      this.isCollapse = !this.isCollapse;
    });
    // console.log("routes",this.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
