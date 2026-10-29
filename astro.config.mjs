// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://webpretzel.ca",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  devToolbar: { enabled: false },
});
