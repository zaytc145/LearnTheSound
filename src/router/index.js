import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import Chats from "../views/Chats.vue";
import Profile from "../views/Profile.vue";
import Chat from "../components/chat/Chat.vue";

import auth from "./middleware/auth.js";
import guest from "./middleware/guest.js";
import pipeline from "./pipeline.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: { name: "Main" },
    meta: {
      // layout: "MainLayout",
      // icon: "el-icon-menu",
      // element: "sidebar",
      element: "none"
    }
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      // layout: "MainLayout",
      // icon: "el-icon-menu",
      // element: "sidebar",
      element: "header"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      element: "header",
      hideAuth: true,
      middleware: [guest]
    }
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration,
    meta: {
      element: "header",
      hideAuth: true,
      middleware: [guest]
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      layout: "MainLayout",
      icon: "el-icon-user",
      element: "sidebar",
      middleware: [auth]
    }
  },
  {
    path: "/chats",
    name: "Chats",
    component: Chats,
    meta: {
      layout: "MainLayout",
      icon: "el-icon-chat-dot-round",
      element: "sidebar",
      requiresAuth: true,
      middleware: [auth]
    },
    children: [
      {
        path: "/chats/:chatId",
        name: "Chat",
        component: Chat,
        meta: {
          layout: "MainLayout",
          middleware: [auth]
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context,
    next: pipeline(context, middleware, 1)
  });
});

export default router;
