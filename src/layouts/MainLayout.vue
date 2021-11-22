<template>
  <el-row>
    <el-col :span="24">
      <Header />
    </el-col>
    <el-col :span="4">
      <Sidebar />
    </el-col>
    <el-col :span="20">
      <div class="body">
        <slot />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Header from "../components/navigation/Header.vue";
import Sidebar from "../components/navigation/Sidebar.vue";

/**
 * MainLayout
 * @displayName MainLayout
 */
export default {
  name: "MainLayout",
  components: {
    Header,
    Sidebar
  }
};
</script>
