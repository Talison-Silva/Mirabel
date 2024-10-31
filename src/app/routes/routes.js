import Dashboard from "@UI/layout/dashboard.vue";
import Home from "@app/pages/index.vue";

export const routes = [
  {
    path: "dashboard/",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Home,
      },
      {
        path: "orders",
        name: "orders",
        component: Home,
      },
      {
        path: "clients",
        name: "clients",
        component: Home,
      },
      {
        path: "products",
        name: "products",
        component: Home,
      },
      {
        path: "services",
        name: "services Stock",
        component: Home,
      },
      {
        path: "stock",
        name: "stock",
        component: Home,
      },
      {
        path: "reports",
        name: "reports",
        component: Home,
      },
      {
        path: "settings",
        name: "settings",
        component: Home,
      },
    ],
  },
];
