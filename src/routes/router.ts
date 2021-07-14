import Router from "vue-router";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("./home/Home.vue"),
    },
    {
      path: "/anime/:id",
      component: () => import("./anime/Anime.vue"),
    },
    {
      path: "*",
      component: () => import("./notFound/NotFound.vue"),
    },
  ],
});
