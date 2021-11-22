<template>
  <el-row>
    <el-col :span="24">
      <Header />
    </el-col>
    <el-col :span="24">
      <div class="body">
        <slot />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Header from "../components/navigation/Header.vue";

/**
 * SecondLayout
 * @displayName SecondLayout
 */

export default {
  name: "SecondLayout",
  components: {
    Header
  }
};
</script>
