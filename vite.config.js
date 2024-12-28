import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**"],
      exclude: [
        "src/**/*.test.{js,jsx,ts,tsx}", // Test files
        "src/**/*.d.ts", // Type declarations
        "src/routeTree.gen.ts", // Auto-generated route tree
        "src/contexts.jsx", // Context definitions typically don't need tests
        "src/ErrorBoundary.jsx", // React error boundary is tested by React itself
        "src/__tests__/**", // All test files directory
      ],
      all: true,
    },
  },
});
