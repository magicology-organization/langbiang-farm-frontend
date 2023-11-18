import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://langbiang-farm-backend-api.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
