import Content from "./content/index.vue";
import Header from "./header/index.vue";
import Aside from "./aside/index.vue";

const register = (app) => {
  app.component("Aside", Aside);
  app.component("Header", Header);
  app.component("Content", Content);
};

export default { register };
