import DashboardLayout from "@/layout/dashboard.vue";
import Dashboard from "@/pages/dashboard/index.vue";

export const routes = [
  {
    path: "/",
    redirect: "dashboard/",
  },
  {
    path: "dashboard/",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "orders",
        name: "orders",
        component: Dashboard,
      },
      {
        path: "clients",
        name: "clients",
        component: Dashboard,
      },
      {
        path: "products",
        name: "products",
        component: Dashboard,
      },
      {
        path: "services",
        name: "services Stock",
        component: Dashboard,
      },
      {
        path: "stock",
        name: "stock",
        component: Dashboard,
      },
      {
        path: "reports",
        name: "reports",
        component: Dashboard,
      },
      {
        path: "settings",
        name: "settings",
        component: Dashboard,
      },
    ],
  },
];
