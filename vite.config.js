import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/v1": {
          target: "http://localhost:5000/",
          changeOrigin: true,
        },
        "/api/v2": {
          target: "http://localhost:5115",
          changeOrigin: true,
        },
      },
    },
  };
});
