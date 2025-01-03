import { createApp } from "vue";
import App from "@/App.vue";

import components from "@/components";
import partials from "@/partials";

import { router } from "@/router";
import "@/styles/main.css";

const app = createApp(App);
app.use(router);

components.register(app);
partials.register(app);

app.mount("#app");
