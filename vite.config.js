import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@UI": resolve(join(__dirname, "/src", "/UI")),
      "@app": resolve(join(__dirname, "/src", "/app")),
      "@assets": resolve(join(__dirname, "/src", "/assets")),
    },
  },
});
