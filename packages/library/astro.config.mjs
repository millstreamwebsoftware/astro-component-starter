import path from "node:path";
import { fileURLToPath } from "node:url";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";
import { cssWatcher } from "../../packages/shared/plugins/css-watcher.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4322,
  },
  integrations: [
    icon({
      iconDir: path.resolve(__dirname, "../icons"),
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@skele/components": path.resolve(__dirname, "../../packages/components"),
        "@skele/styles": path.resolve(__dirname, "../../packages/styles"),
        "@skele/plugins": path.resolve(__dirname, "../../packages/shared/plugins"),
      },
    },
    plugins: [cssWatcher()],
  },
});
