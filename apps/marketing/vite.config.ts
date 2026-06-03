import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// `BASE_PATH` is set by the GitHub Pages workflow to "/insimed/" (the project
// site sub-path). Defaults to "/" for local dev and the SST/CloudFront deploy.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
});
