<template>
  <div class="registration">
    <div class="registration-form">
      <el-card class="box-card">
        <h3>Registration</h3>
        <el-form
          ref="registrationForm"
          :rules="rules"
          :model="form"
          label-width="120px"
        >
          <el-form-item label="First Name" prop="fName">
            <el-input
              v-model="form.fName"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Second Name" prop="sName">
            <el-input
              v-model="form.sName"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="form.email"
              type="email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              v-model="form.password"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registrationForm')"
              >Register</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
/**
 * Registration
 * @displayName Registration
 */
export default {
  data() {
    return {
      form: {
        fName: "",
        sName: "",
        email: "",
        password: ""
      },
      rules: {
        fName: [
          {
            required: true,
            message: "Please input you're first name",
            trigger: "blur"
          }
        ],
        sName: [
          {
            required: true,
            message: "Please input you're second name",
            trigger: "blur"
          }
        ],
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
     * Валидация и вызов действия регистрации
     *
     * @param {string} formName
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.signup();
        }
      });
    },
    /**
     * Регистрация
     */
    signup() {
      this.$store.dispatch("signup", this.form);
      // this.$router.push({ name: "Profile" });
    }
  }
};
</script>

<style lang="scss" scoped>
.registration {
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
