import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase/firebase";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MainLayout from "./layouts/MainLayout";
import SecondLayout from "./layouts/SecondLayout";

Vue.component("MainLayout", MainLayout);
Vue.component("SecondLayout", SecondLayout);

Vue.use(ElementUI);

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
