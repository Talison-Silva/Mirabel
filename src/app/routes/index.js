import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@app/routes/routes.js";

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", children: [].concat(routes) }],
});
