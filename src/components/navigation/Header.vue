<template>
  <div class="header">
    <div class="logo"><h2>LearnTheSound</h2></div>
    <div class="nav">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        :default-active="$route.path"
      >
        <el-menu-item
          :index="route.path"
          :route="route.path"
          v-for="route in routes"
          :key="route.name"
        >
          <span>{{ route.name }}</span>
        </el-menu-item>
        <el-submenu v-if="isAuth" index="">
          <template slot="title">{{ userFullName }}</template>
          <el-menu-item index="/profile" :route="{ name: 'Profile' }"
            >Profile</el-menu-item
          >
          <el-menu-item @click="logout">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
/**
 * Header
 * @displayName Header
 */
export default {
  computed: {
    /**
     * Получение списка маршрутов
     */
    routes() {
      return this.$router.options.routes.filter(
        route =>
          route.meta.element === "header" && route.meta.hideAuth != this.isAuth
      );
    },
    /**
     * Проверка статука авторизации
     */
    isAuth() {
      return this.$store.getters.authStatus;
    },
    /**
     * Получение польного имени пользователя
     */
    userFullName() {
      const userProfile = this.$store.getters.userProfile;
      return userProfile
        ? userProfile.firstName + " " + userProfile.secondName
        : null;
    }
  },
  methods: {
    /**
     * Выход из системы
     */
    logout() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/_variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  background: $greenColor;
  color: $textColor !important;
  padding: 0 20px;
  .logo {
    padding: 16px 0;
    h2 {
      margin: 0;
    }
  }
  .el-menu-demo {
    background: none;
    border: none;
    border-bottom: none !important;
    height: 100%;

    .el-menu-item,
    .el-submenu {
      border: none;
      height: 100%;
      padding: 20px;
      font-size: 16px;
      line-height: initial;

      .el-submenu__title {
        padding: 0;
        font-size: 16px;
        line-height: initial;
        height: auto;
        color: $textColor;
        border-bottom: none;
        &:hover,
        &:focus,
        &.is-active {
          background-color: transparent;
          color: $textColor !important;
        }

        i {
          color: $textColor;
        }
      }
    }

    .el-menu-item {
      &:hover,
      &:focus,
      &.is-active {
        background-color: $greenHover !important;
        color: $textColor !important;
        border-bottom: 2px solid $greenBorder;
      }
    }
    .el-menu-item,
    .el-menu-item i,
    .el-submenu,
    .el-dropdown {
      color: $textColor;
    }
  }
}
</style>
