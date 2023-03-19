import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import Error404Page from "../pages/Error404Page.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error-404-page",
      component: Error404Page,
    },
  ],
});

export { router };
