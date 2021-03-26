import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/index";
import Home from "@/views/home/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
