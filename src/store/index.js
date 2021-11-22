import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase/firebase";
import router from "../router/index";

Vue.use(Vuex);
/**
 * Data Storage
 * @displayName DataStorage
 */
export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    /**
     * Проверка статуса авторизации
     *
     * @param state
     * @returns {boolean}
     */
    authStatus: state => {
      return state.user !== null;
    },
    /**
     *
     * @param state
     * @returns {Object}
     */
    userProfile: state => {
      return state.user;
    }
  },
  mutations: {
    /**
     * Изменения данных юзера
     *
     * @param state
     * @param val
     */
    setUserProfile(state, val) {
      state.user = val;
    }
  },
  actions: {
    /**
     * Логин в систему
     *
     * @param dispatch
     * @param form
     * @returns {Promise<void>}
     */
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      dispatch("fetchUserProfile", user);
    },
    /**
     * Выход из системы
     *
     * @param commit
     * @returns {Promise<void>}
     */
    async signOut({ commit }) {
      await fb.auth.signOut().then(() => {
        commit("setUserProfile", null);
        router.push({ name: "Login" });
      });
    },
    /**
     * Получить данные профиля пользователя
     *
     * @param commit
     * @param user
     * @returns {Promise<void>}
     */
    async fetchUserProfile({ commit }, user) {
      const uid = user.uid;
      const userProfile = await fb.usersCollection.doc(uid).get();
      const userState = {
        ...userProfile.data(),
        uid
      };

      commit("setUserProfile", userState);
      router.push({ name: "Profile" });
    },
    /**
     * Регистрация в системе
     *
     * @param dispatch
     * @param form
     * @returns {Promise<void>}
     */
    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      await fb.usersCollection.doc(user.uid).set({
        firstName: form.fName,
        secondName: form.sName,
        email: form.email
      });

      dispatch("fetchUserProfile", user);
    }
  },
  modules: {}
});
