import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "huxianc-utils",
      fileName: (format) => `huxianc-utils.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    sourcemap: true,
  },
  plugins: [dts()],
});
