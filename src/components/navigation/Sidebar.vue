<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      :router="true"
      :default-active="$route.path"
    >
      <el-menu-item
        :index="route.path"
        :route="route.path"
        v-for="route in routes"
        :key="route.name"
      >
        <i :class="route.meta.icon"></i>
        <span>{{ route.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
/**
 * Sidebar of UI.
 * @displayName Sidebar
 */
export default {
  computed: {
    /**
     * Получение списка маршрутов
     */
    routes() {
      return this.$router.options.routes.filter(
        route => route.meta.element === "sidebar"
      );
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  height: calc(100vh - 66px);
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>
