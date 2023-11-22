import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add the FontAwesome icon libraries here
        /^@fortawesome\/free-regular-svg-icons/,
        /^@fortawesome\/free-solid-svg-icons/,
        // Add other FontAwesome libraries if used
      ],
    },
  },
});
