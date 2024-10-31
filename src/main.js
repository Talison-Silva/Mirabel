import { createApp } from "vue";
import "@assets/css/style.css";
import App from "@app/App.vue";
import { router } from "@app/routes";

createApp(App).use(router).mount("#app");
