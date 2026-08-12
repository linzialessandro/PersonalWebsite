import { copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

function spaFallback() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const index = resolve(rootDir, "dist/index.html");
      if (existsSync(index)) {
        copyFileSync(index, resolve(rootDir, "dist/404.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: process.env.NODE_ENV === "production" ? "/PersonalWebsite/" : "/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
  },
});
