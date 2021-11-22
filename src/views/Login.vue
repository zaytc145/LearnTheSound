<template>
  <div class="login">
    <div class="login-form">
      <el-card class="box-card">
        <h3>Login</h3>
        <el-form
          ref="loginForm"
          :rules="rules"
          :model="form"
          label-width="120px"
        >
          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" type="email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
/**
 * Login
 * @displayName Login
 */
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please input password",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    /**
     * Валидация полей и вызов действия логина
     *
     * @param {string} formName
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        }
      });
    },
    /**
     * Логин в системе
     */
    login() {
      this.$store.dispatch("login", this.form);
      // this.$router.push({ name: "Profile" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-form {
    width: 100%;
    max-width: 500px;
  }
}
</style>
