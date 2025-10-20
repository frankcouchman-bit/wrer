// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2015",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-utils": ["zustand", "react-hot-toast", "lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://seoscribe.frank-couchman.workers.dev",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p,
      },
      "/auth": {
        target: "https://seoscribe.frank-couchman.workers.dev",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion", "zustand"],
  },
});
