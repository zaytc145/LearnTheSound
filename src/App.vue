<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
/**
 * App
 * @displayName App
 */
export default {
  /**
   * Получение макета страницы
   */
  computed: {
    layout() {
      return this.$route.meta.layout || "SecondLayout";
    }
  }
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.customLoader {
  circle {
    stroke: $greenColor !important;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  padding: 20px;
  height: calc(100vh - 66px);
  overflow: auto;
}
</style>
