// import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import viteCompression from "vite-plugin-compression";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// const { dependencies } = JSON.parse(
//   fs.readFileSync(path.join(dirname, "package.json"))
// );

const vendorPackages = [
  "react",
  "react-router-dom",
  "react-router",
  "react-dom",
];

// function renderChunks(deps) {
//   let chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (vendorPackages.includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

// export const OUTPUT_DIRECTORY = "dist";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteCompression({
    //   algorithm: "brotliCompress",
    //   filter: /\.(js|mjs|json|css|html|svg)$/i,
    // }),
  ],
  // build: {
  //   outDir: OUTPUT_DIRECTORY,
  //   sourcemap: false,
  //   rollupOptions: {
  //     external: ["fsevents"],
  //     output: {
  //       manualChunks: {
  //         vendor: vendorPackages,
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      Components: path.resolve(dirname, "./src/shared/components"),
      Containers: path.resolve(dirname, "./src/shared/containers"),
      // Utils: path.resolve(dirname, "./src/utils"),
      Assets: path.resolve(dirname, "./public/assets"),
      // Context: path.resolve(dirname, "./src/context"),
      Routes: path.resolve(dirname, "./src/routes"),
      Root: path.resolve(dirname, "./src"),
      Images: path.resolve(dirname, "./src/images"),
      App: path.resolve(dirname, "./src/app"),
    },
  },
  server: {
    port: 3000,
  },
});
